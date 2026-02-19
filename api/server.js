import express from 'express';
import cors from 'cors';
import pg from 'pg';
const { Pool } = pg;

const app = express();
const port = process.env.PORT || 3000;

// Database connection pool
const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
});

// Middleware
app.use(cors());
app.use(express.json());

// Health check endpoint
app.get('/health', async (req, res) => {
  try {
    await pool.query('SELECT 1');
    res.json({ status: 'ok', database: 'connected' });
  } catch (error) {
    res.status(500).json({ status: 'error', database: 'disconnected', error: error.message });
  }
});

// ============================================
// CLASH ROYALE ENDPOINTS
// ============================================

// Get all Clash Royale registrations
app.get('/api/registrations/clash-royale', async (req, res) => {
  try {
    const result = await pool.query(
      'SELECT * FROM registrations_clash_royale ORDER BY created_at DESC'
    );
    res.json(result.rows);
  } catch (error) {
    console.error('Error fetching Clash Royale registrations:', error);
    res.status(500).json({ error: 'Failed to fetch registrations' });
  }
});

// Submit Clash Royale registration
app.post('/api/registrations/clash-royale', async (req, res) => {
  const { prenom, nom, email, telephone, player_tag, classe, niveau } = req.body;

  // Validation
  if (!prenom || !nom || !email || !player_tag) {
    return res.status(400).json({ error: 'Missing required fields' });
  }

  try {
    const result = await pool.query(
      `INSERT INTO registrations_clash_royale 
       (prenom, nom, email, telephone, player_tag, classe, niveau) 
       VALUES ($1, $2, $3, $4, $5, $6, $7) 
       RETURNING *`,
      [prenom, nom, email, telephone, player_tag, classe, niveau]
    );
    res.status(201).json(result.rows[0]);
  } catch (error) {
    console.error('Error creating Clash Royale registration:', error);
    if (error.code === '23505') { // Unique violation
      res.status(409).json({ error: 'Email or player tag already registered' });
    } else {
      res.status(500).json({ error: 'Failed to create registration' });
    }
  }
});

// ============================================
// CHESS ENDPOINTS
// ============================================

// Get all Chess registrations
app.get('/api/registrations/echecs', async (req, res) => {
  try {
    const result = await pool.query(
      'SELECT * FROM registrations_echecs ORDER BY created_at DESC'
    );
    res.json(result.rows);
  } catch (error) {
    console.error('Error fetching Chess registrations:', error);
    res.status(500).json({ error: 'Failed to fetch registrations' });
  }
});

// Submit Chess registration
app.post('/api/registrations/echecs', async (req, res) => {
  const { prenom, nom, email, telephone, date_naissance, niveau_echecs, club_affiliation } = req.body;

  if (!prenom || !nom || !email) {
    return res.status(400).json({ error: 'Missing required fields' });
  }

  try {
    const result = await pool.query(
      `INSERT INTO registrations_echecs 
       (prenom, nom, email, telephone, date_naissance, niveau_echecs, club_affiliation) 
       VALUES ($1, $2, $3, $4, $5, $6, $7) 
       RETURNING *`,
      [prenom, nom, email, telephone, date_naissance, niveau_echecs, club_affiliation]
    );
    res.status(201).json(result.rows[0]);
  } catch (error) {
    console.error('Error creating Chess registration:', error);
    if (error.code === '23505') {
      res.status(409).json({ error: 'Email already registered' });
    } else {
      res.status(500).json({ error: 'Failed to create registration' });
    }
  }
});

// ============================================
// RUNNING ENDPOINTS
// ============================================

// Get all Running registrations
app.get('/api/registrations/course', async (req, res) => {
  try {
    const result = await pool.query(
      'SELECT * FROM registrations_course ORDER BY created_at DESC'
    );
    res.json(result.rows);
  } catch (error) {
    console.error('Error fetching Running registrations:', error);
    res.status(500).json({ error: 'Failed to fetch registrations' });
  }
});

// Submit Running registration
app.post('/api/registrations/course', async (req, res) => {
  const { 
    prenom, nom, email, telephone, date_naissance, 
    sexe, categorie_age, taille_tshirt, 
    urgence_contact, urgence_telephone 
  } = req.body;

  if (!prenom || !nom || !email) {
    return res.status(400).json({ error: 'Missing required fields' });
  }

  try {
    const result = await pool.query(
      `INSERT INTO registrations_course 
       (prenom, nom, email, telephone, date_naissance, sexe, categorie_age, 
        taille_tshirt, urgence_contact, urgence_telephone) 
       VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10) 
       RETURNING *`,
      [prenom, nom, email, telephone, date_naissance, sexe, categorie_age, 
       taille_tshirt, urgence_contact, urgence_telephone]
    );
    res.status(201).json(result.rows[0]);
  } catch (error) {
    console.error('Error creating Running registration:', error);
    if (error.code === '23505') {
      res.status(409).json({ error: 'Email already registered' });
    } else {
      res.status(500).json({ error: 'Failed to create registration' });
    }
  }
});

// ============================================
// STATISTICS ENDPOINTS
// ============================================

// Get registration statistics
app.get('/api/stats', async (req, res) => {
  try {
    const [clashResult, chessResult, runningResult] = await Promise.all([
      pool.query('SELECT COUNT(*) as count FROM registrations_clash_royale'),
      pool.query('SELECT COUNT(*) as count FROM registrations_echecs'),
      pool.query('SELECT COUNT(*) as count FROM registrations_course'),
    ]);

    res.json({
      clash_royale: parseInt(clashResult.rows[0].count),
      echecs: parseInt(chessResult.rows[0].count),
      course: parseInt(runningResult.rows[0].count),
      total: parseInt(clashResult.rows[0].count) + 
             parseInt(chessResult.rows[0].count) + 
             parseInt(runningResult.rows[0].count)
    });
  } catch (error) {
    console.error('Error fetching statistics:', error);
    res.status(500).json({ error: 'Failed to fetch statistics' });
  }
});

// Start server
app.listen(port, () => {
  console.log(`✅ Studio-ie² API server running on port ${port}`);
  console.log(`📊 Health check: http://localhost:${port}/health`);
});

// Graceful shutdown
process.on('SIGTERM', () => {
  console.log('SIGTERM signal received: closing HTTP server');
  pool.end(() => {
    console.log('Database pool closed');
    process.exit(0);
  });
});

// Database client configuration for PostgreSQL
// Note: Direct database connection removed from frontend for security
// All database operations now go through the API

// API Base URL
const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:3000';

// API client functions
export const api = {
  // Health check
  health: async () => {
    const response = await fetch(`${API_URL}/health`);
    return response.json();
  },

  // Clash Royale
  clashRoyale: {
    getAll: async () => {
      const response = await fetch(`${API_URL}/api/registrations/clash-royale`);
      if (!response.ok) throw new Error('Failed to fetch registrations');
      return response.json();
    },
    create: async (data: any) => {
      const response = await fetch(`${API_URL}/api/registrations/clash-royale`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });
      if (!response.ok) {
        const error = await response.json();
        throw new Error(error.error || 'Failed to create registration');
      }
      return response.json();
    },
  },

  // Chess
  echecs: {
    getAll: async () => {
      const response = await fetch(`${API_URL}/api/registrations/echecs`);
      if (!response.ok) throw new Error('Failed to fetch registrations');
      return response.json();
    },
    create: async (data: any) => {
      const response = await fetch(`${API_URL}/api/registrations/echecs`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });
      if (!response.ok) {
        const error = await response.json();
        throw new Error(error.error || 'Failed to create registration');
      }
      return response.json();
    },
  },

  // Running
  course: {
    getAll: async () => {
      const response = await fetch(`${API_URL}/api/registrations/course`);
      if (!response.ok) throw new Error('Failed to fetch registrations');
      return response.json();
    },
    create: async (data: any) => {
      const response = await fetch(`${API_URL}/api/registrations/course`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });
      if (!response.ok) {
        const error = await response.json();
        throw new Error(error.error || 'Failed to create registration');
      }
      return response.json();
    },
  },

  // Statistics
  stats: {
    getAll: async () => {
      const response = await fetch(`${API_URL}/api/stats`);
      if (!response.ok) throw new Error('Failed to fetch statistics');
      return response.json();
    },
  },
};

# 🚀 Déploiement Portainer - Guide Complet

## 📋 Prérequis

1. Serveur avec Docker installé
2. Portainer installé et accessible
3. Accès SSH au serveur (pour uploader init-db.sql)

---

## 🔧 Étape 1 : Préparer les images

Sur votre machine locale :

```bash
# Rebuild avec la nouvelle config
docker compose build --no-cache

# Tag les images
docker tag studio_ie2-app:latest niry08/studio_ie2-app:latest
docker tag studio_ie2-api:latest niry08/studio_ie2-api:latest

# Login Docker Hub
docker login

# Push les images
docker push niry08/studio_ie2-app:latest
docker push niry08/studio_ie2-api:latest
```

---

## 📤 Étape 2 : Uploader init-db.sql sur le serveur

```bash
# Via SCP
scp init-db.sql user@votre-serveur:/opt/studio_ie2/init-db.sql

# Ou via SSH puis créer le fichier
ssh user@votre-serveur
mkdir -p /opt/studio_ie2
nano /opt/studio_ie2/init-db.sql
# Coller le contenu de init-db.sql
```

---

## 🌐 Étape 3 : Déployer dans Portainer

### 3.1 Se connecter à Portainer
```
http://votre-serveur:9000
```

### 3.2 Créer une nouvelle Stack

1. Aller dans **Stacks** → **Add stack**
2. Nom : `studio_ie2`
3. **Build method** : Web editor

### 3.3 Coller ce docker-compose

```yaml
name: studio_ie2
services:
  postgres:
    image: postgres:16-alpine
    container_name: studio_ie2_postgres
    restart: unless-stopped
    networks:
      - studio_network
    environment:
      POSTGRES_DB: studio_ie2
      POSTGRES_USER: postgres
      POSTGRES_PASSWORD: ${POSTGRES_PASSWORD}
    volumes:
      - postgres_data:/var/lib/postgresql/data
      - /opt/studio_ie2/init-db.sql:/docker-entrypoint-initdb.d/init-db.sql
    healthcheck:
      test: ["CMD-SHELL", "pg_isready -U postgres"]
      interval: 10s
      timeout: 5s
      retries: 5

  api:
    image: niry08/studio_ie2-api:latest
    container_name: studio_ie2_api
    restart: unless-stopped
    networks:
      - studio_network
    depends_on:
      postgres:
        condition: service_healthy
    environment:
      - DATABASE_URL=postgresql://postgres:${POSTGRES_PASSWORD}@postgres:5432/studio_ie2
      - PORT=3000

  app:
    image: niry08/studio_ie2-app:latest
    container_name: studio_ie2_app
    restart: unless-stopped
    networks:
      - studio_network
    depends_on:
      postgres:
        condition: service_healthy
      api:
        condition: service_started
    ports:
      - "80:80"

volumes:
  postgres_data:
    driver: local

networks:
  studio_network:
    driver: bridge
```

### 3.4 Variables d'environnement

Dans la section **Environment variables** de Portainer, ajouter :

```
POSTGRES_PASSWORD=VotreMotDePasseSecurise123!
```

### 3.5 Déployer

Cliquer sur **Deploy the stack**

---

## ✅ Vérification

### 1. Vérifier les containers
Dans Portainer : **Containers** → Tous doivent être "running"

### 2. Tester l'application
```
http://votre-serveur
```

### 3. Tester l'API
```
http://votre-serveur/api/stats
```

### 4. Accéder à la base de données

Via Portainer :
1. **Containers** → Cliquer sur `studio_ie2_postgres`
2. **Console** → Cliquer sur "Connect"
3. Taper :
```bash
psql -U postgres -d studio_ie2
```

4. Voir les données :
```sql
\dt
SELECT * FROM registrations_clash_royale;
SELECT * FROM registrations_echecs;
SELECT * FROM registrations_course;
\q
```

---

## 🔄 Mise à jour du projet

### Après avoir modifié le code :

```bash
# 1. Rebuild local
docker compose build --no-cache

# 2. Tag & push
docker tag studio_ie2-app:latest niry08/studio_ie2-app:latest
docker push niry08/studio_ie2-app:latest

# 3. Dans Portainer
# Aller dans Stacks → studio_ie2 → "Pull and redeploy"
# Ou redémarrer les containers
```

---

## 🔐 Sécurité Production

### 1. Ne PAS exposer PostgreSQL publiquement

Le docker-compose ci-dessus n'expose **pas** le port 5432. C'est bien !

### 2. Utiliser HTTPS

Installer Nginx Proxy Manager ou Traefik devant votre application.

**Avec Nginx Proxy Manager :**
1. Créer un Proxy Host
2. Domain : `studio-ie2.votre-domaine.com`
3. Forward to : `studio_ie2_app`
4. Port : `80`
5. Activer SSL avec Let's Encrypt

### 3. Changer le mot de passe PostgreSQL

Dans Portainer, éditer la variable `POSTGRES_PASSWORD`

---

## 🆘 Troubleshooting

### Erreur : "Cannot connect to database"
```bash
# Dans Portainer Console du container postgres
pg_isready -U postgres
# Doit retourner "accepting connections"
```

### Erreur : "init-db.sql not found"
```bash
# Vérifier sur le serveur
ssh user@votre-serveur
ls -la /opt/studio_ie2/init-db.sql
# Si absent, le créer
```

### Erreur : "Port 80 already in use"
```bash
# Vérifier quel processus utilise le port 80
sudo lsof -i :80
# Arrêter le service en conflit ou changer le port dans docker-compose
ports:
  - "8080:80"  # Au lieu de 80:80
```

### Containers qui redémarrent en boucle
```bash
# Voir les logs dans Portainer
# Containers → studio_ie2_xxx → Logs
```

---

## 📊 Monitoring

### Voir les logs en temps réel

Dans Portainer :
- **Containers** → Cliquer sur un container
- **Logs** → Activer "Auto-refresh"

### Voir les stats

Dans Portainer :
- **Containers** → Cliquer sur un container
- **Stats** → CPU, RAM, Network

---

## 🎯 URLs finales

```
Application : http://votre-serveur (ou votre-domaine.com)
API : http://votre-serveur/api/health
Portainer : http://votre-serveur:9000
```

---

## ✅ Checklist de déploiement

- [ ] Images pushed sur Docker Hub
- [ ] init-db.sql uploadé sur `/opt/studio_ie2/`
- [ ] Stack créée dans Portainer
- [ ] Variable `POSTGRES_PASSWORD` configurée
- [ ] Stack déployée avec succès
- [ ] Application accessible via navigateur
- [ ] API répond sur `/api/health`
- [ ] Inscriptions fonctionnent
- [ ] Base de données accessible

**🎉 Votre application est déployée !**

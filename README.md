# Studio-ie²

## Démarrer

```bash
docker compose up -d
```

## Accès

- Application : http://localhost
- API : http://localhost/api/*

## Données PostgreSQL

```bash
docker compose exec postgres psql -U postgres -d studio_ie2
```

```sql
SELECT * FROM registrations_clash_royale;
SELECT * FROM registrations_echecs;
SELECT * FROM registrations_course;
```

## Rebuild & Deploy

```bash
# Rebuild sans cache
docker compose build --no-cache

# Tag & push
docker tag studio_ie2-app:latest niry08/studio_ie2-app:latest
docker tag studio_ie2-api:latest niry08/studio_ie2-api:latest
docker push niry08/studio_ie2-app:latest
docker push niry08/studio_ie2-api:latest
```

## Arrêter

```bash
docker compose down
```

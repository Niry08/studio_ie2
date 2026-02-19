# Studio-ie²

## Démarrer

```bash
docker compose up -d
```

## Accéder aux données

```bash
docker compose exec postgres psql -U postgres -d studio_ie2
```

```sql
SELECT * FROM registrations_clash_royale;
SELECT * FROM registrations_echecs;
SELECT * FROM registrations_course;
```

## Arrêter

```bash
docker compose down
```

Run
    docker-compose up -d

That will start 3 services:
    app on port 3000
    pg on port 5432
    pgadmin on port 5555 (hostname: pg, port: 5432, username: user, password: password)

Run
    docker ps -> copy app container id
    docker exec -it <app container_id> sh
    npm run migrate (runs all migrations)


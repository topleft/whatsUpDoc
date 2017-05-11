#!/bin/sh

# the order of this file is important b/c of dependencies in postgres

docker-compose run todo-service knex migrate:rollback --env development --knexfile app/knexfile.js
docker-compose run todo-service knex migrate:latest --env development --knexfile app/knexfile.js
docker-compose run todo-service knex seed:run --env development --knexfile app/knexfile.js

docker-compose run user-service knex migrate:rollback --env development --knexfile app/knexfile.js
docker-compose run user-service knex migrate:latest --env development --knexfile app/knexfile.js
docker-compose run user-service knex seed:run --env development --knexfile app/knexfile.js

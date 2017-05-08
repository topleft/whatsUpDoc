#!/bin/sh

docker-compose run user-service knex migrate:latest --env development --knexfile app/knexfile.js
docker-compose run user-service knex migrate:latest --env test --knexfile app/knexfile.js

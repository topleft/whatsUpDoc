#!/bin/sh

docker-compose run user-service knex migrate:latest --env development --knexfile ./knexfile.js

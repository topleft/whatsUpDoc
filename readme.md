## Fire It Up (but do the setup first)

```sh
$ gulp
```

## Setup


### Postgres

Install postgreSQL

```sh
$ brew update
$ brew install postgresql
```

### Develop locally

We need to run this postgres server in the background so that we can access it from our application. For this we will use a *brew service*.

```sh
$ brew tap homebrew/services
```

To see a list of your services and their statuses:

```sh
$ brew services list
```

To start up the postgres server:

```sh
$ brew services start postgresql
```

Checkout it out:

```sh
$ brew services list
```

Dont do it now, but just so you know...to shut it down:

```sh
$ brew services stop postgresql
```

Using the postgreSQL CLI tools, create a database locally:

```sh
$ createdb whats_up_doc
```

If you want a different DB name, update the variable `databaseName` in the *knexfile.js*.

Also there is a handy database browser called (Postico)[https://eggerapps.at/postico/].

Now install dependencies:

```sh
$ npm install
```

To create the *users* table run:

```sh
$ npm run knex migrate:latest
```

Add a token secret to you environment:

```sh

export WUD_TOKEN_SECRET='createareallyloongrandmonstringandputithere'
```

Then fire up the app:

```sh
$ gulp
```

This app runs on port 3001. To change that go into _src/server/server.js_

### How To Run Tests?

Glad you asked!

```sh
$ NODE_ENV=test npm test
```
##### Making our test suite secure

When writing tests be sure to wrap the `module.exports` in an if statement insuring that the NODE_ENV is 'test'.

```javascript
if (process.env.NODE_ENV === 'test') {
  module.exports = tests;
}
```



## DOCKERIZE

Steps to recreate:

We are using [docker compose](https://docs.docker.com/compose/) to encapsulate and fire up our micro-services. There is a single _docker-compose.yml_ file in the root of the whole project which defines the relationship between of each of our services and also how to fires them up. It is also necessary to create a _Dockerfile_ within each micro-service to define the micro-service itself (which docker image to use, set and build steps, etc).

NOTE: every build drops the DB.




connect to dockerized db: psql -h localhost -p 5433 -d whats_up_doc -U admin --password admin

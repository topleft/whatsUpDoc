# Docker image to use
FROM node:boron

# Create app directory
RUN mkdir -p /src
WORKDIR /src

# make command line tools available (ex. knex)
ENV PATH ./node_modules/.bin:$PATH

# Install app dependencies
ADD package.json /src/package.json
RUN npm install

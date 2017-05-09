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

# map a private port inside the docker image to the port our app is serving up
EXPOSE 3031
# expose the port for the nodemon live reload (this is the port specified in the gulp file where nodemon is listening)
EXPOSE 35728

# set the environment variables
ENV WUD_TOKEN_SECRET |\x9e\xc2\xdf.\x1d\x15\xa8\xb6]&q\x12\xc0\x1d\x1d\xee\xc2TuEi!\xf4
ENV NODE_ENV development
CMD ["npm", "start"]

# Docker image to use
FROM node:boron

# Create app directory
RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app

ENV PATH /usr/src/app/node_modules/.bin:$PATH
# Install app dependencies
COPY package.json /usr/src/app/
RUN npm install gulp -g
RUN npm install

COPY . /usr/src/app

# map a private port inside the docker image to the port our app is serving up
EXPOSE 3030
EXPOSE 35729

# set the environment variables
ENV WUD_TOKEN_SECRET |\x9e\xc2\xdf.\x1d\x15\xa8\xb6]&q\x12\xc0\x1d\x1d\xee\xc2TuEi!\xf4
ENV NODE_ENV development
CMD [ "gulp" ]

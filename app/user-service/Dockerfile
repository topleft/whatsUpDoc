# Docker image to use
FROM node:boron

# Create app directory
RUN mkdir -p /root
WORKDIR /root

# put all of the files in there
COPY . /root

# make command line tools available (ex. knex)
ENV PATH /root/node_modules/.bin:$PATH

# Install app dependencies
RUN npm install gulp -g
RUN npm install


# map a private port inside the docker image to the port our app is serving up
EXPOSE 3030
EXPOSE 35729

# set the environment variables
ENV WUD_TOKEN_SECRET |\x9e\xc2\xdf.\x1d\x15\xa8\xb6]&q\x12\xc0\x1d\x1d\xee\xc2TuEi!\xf4
ENV NODE_ENV development
CMD [ "gulp" ]

FROM node:baron

# Set work directory to /src
WORKDIR /src

# Install app dependencies
RUN npm Install nodemon -g
ADD package.json package.json
RUN npm install
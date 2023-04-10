FROM node:16

# Create app directory
WORKDIR /usr/src/app

# Install app dependencies package.json and package-lock.json
COPY package*.json ./

RUN npm install
# If you are building your code for production
# RUN npm ci --omit=dev

# Bundle app source
COPY . .

EXPOSE 8080
CMD [ "node", "server.js" ]
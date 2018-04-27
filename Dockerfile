FROM node:9.1.0
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
CMD node /app/app.js
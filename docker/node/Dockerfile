FROM node:alpine

WORKDIR /usr/src/app

COPY package.json ./
RUN npm install

COPY .env vite.config.js index.html ./
FROM node:17-alpine

ENV PORT $PORT
ENV DATABASE_URL $DATABASE_URL

EXPOSE $PORT

WORKDIR /usr/src/app

COPY package*.json ./

COPY . .

RUN npm install
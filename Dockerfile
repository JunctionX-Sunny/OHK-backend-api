FROM alpine:3.16

WORKDIR /app

COPY package.json /app

RUN "npm install"

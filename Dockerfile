
FROM node:10-alpine

WORKDIR /app
ENV NODE_ENV=production
COPY package.json ./

RUN npm install

COPY . .

EXPOSE 8080

CMD [ "npm", "start" ]
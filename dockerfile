FROM node:18-alpine

WORKDIR /app-node

EXPOSE 3010

COPY . .

RUN npm install

ENTRYPOINT npm start

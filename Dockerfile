
FROM node:18-alpine

WORKDIR /usr/src/

COPY package*.json ./

COPY . . 

RUN npm i
RUN npm run build

EXPOSE 5000

CMD ["node", "dist/server.js"] 
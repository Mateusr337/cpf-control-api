
FROM node:18-alpine

# diretório criado no container
WORKDIR /usr/src/

# copia todos os arquivos para o container
RUN npm i 

COPY . . 

RUN npx prisma generate
RUN npx prisma db push 
RUN npm run build

CMD ["node", "dist/server.js"] 
FROM node:12-alpine3.15

WORKDIR /app

COPY package.json ./

RUN npm install

COPY . .

EXPOSE 5555

CMD ["npm","start"]



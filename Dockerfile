FROM node:10

EXPOSE 3000

RUN mkdir /micro-node-sequelize-graphql
WORKDIR /micro-node-sequelize-graphql

COPY . /micro-node-sequelize-graphql
RUN npm install

RUN npm run build

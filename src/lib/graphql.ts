import "reflect-metadata";
import { Express } from "express";
import { buildSchema } from "type-graphql";
import { ApolloServer } from "apollo-server-express";
import config from "./config";

export default {
  init: async function(app: Express, path?: string) {

    const schema = await buildSchema({
      resolvers: config.files.resolvers,
    });

    const apolloServer = new ApolloServer({
      schema,
      context: ({ req }) => ({
        req,
        user: req.user
      })
    });

    apolloServer.applyMiddleware({ app, path });

  }
};

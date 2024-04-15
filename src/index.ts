import "reflect-metadata";
import dataSource from "./config/db";
import { buildSchema } from "type-graphql";
import { startStandaloneServer } from "@apollo/server/standalone";
import { CountryResolver } from "./resolvers/Country";
import { ApolloServer } from "@apollo/server";

const start = async () => {
  await dataSource.initialize();
  const schema = await buildSchema({
    resolvers: [CountryResolver],
  });

  const server = new ApolloServer({
    schema,
  });

  const { url } = await startStandaloneServer(server, {});

  console.log(`🚀  Server ready at: ${url}`);
};

start();

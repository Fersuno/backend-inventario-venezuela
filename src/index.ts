import "reflect-metadata";
import * as tq from "type-graphql";
import { ApolloServer } from "apollo-server";
import { DateTimeResolver } from "graphql-scalars";
import { context } from "./context";
import { GraphQLScalarType } from "graphql";
import { resolvers } from "../prisma/typegraph.schema";

const app = async () => {
  const schema = await tq.buildSchema({
    resolvers: resolvers,
    scalarsMap: [{ type: GraphQLScalarType, scalar: DateTimeResolver }],
  });

  new ApolloServer({ schema, context: context }).listen({ port: 4001 }, () =>
    console.log(`🚀 Server ready at: http://localhost:4001`)
  );
};

app();

import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../scalars";
import { Producto } from "../models/Producto";
import { MarcaCount } from "../resolvers/outputs/MarcaCount";

@TypeGraphQL.ObjectType("Marca", {
  isAbstract: true
})
export class Marca {
  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  id!: number;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  nombre!: string;

  Producto?: Producto[];

  @TypeGraphQL.Field(_type => MarcaCount, {
    nullable: true
  })
  _count?: MarcaCount | null;
}

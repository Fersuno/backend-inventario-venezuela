import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../scalars";
import { Producto } from "../models/Producto";
import { OrigenCount } from "../resolvers/outputs/OrigenCount";

@TypeGraphQL.ObjectType("Origen", {
  isAbstract: true
})
export class Origen {
  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  id!: number;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  nombre!: string;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  porcentaje!: number;

  producto?: Producto[];

  @TypeGraphQL.Field(_type => OrigenCount, {
    nullable: true
  })
  _count?: OrigenCount | null;
}

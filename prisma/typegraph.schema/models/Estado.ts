import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../scalars";
import { Sede } from "../models/Sede";
import { EstadoCount } from "../resolvers/outputs/EstadoCount";

@TypeGraphQL.ObjectType("Estado", {
  isAbstract: true
})
export class Estado {
  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  id!: number;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  nombre!: string;

  sedes?: Sede[];

  @TypeGraphQL.Field(_type => EstadoCount, {
    nullable: true
  })
  _count?: EstadoCount | null;
}

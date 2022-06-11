import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";

@TypeGraphQL.InputType("EstadoCreateWithoutSedesInput", {
  isAbstract: true
})
export class EstadoCreateWithoutSedesInput {
  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  nombre!: string;
}

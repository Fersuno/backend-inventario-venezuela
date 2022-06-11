import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { EstadoCreateWithoutSedesInput } from "../inputs/EstadoCreateWithoutSedesInput";
import { EstadoUpdateWithoutSedesInput } from "../inputs/EstadoUpdateWithoutSedesInput";

@TypeGraphQL.InputType("EstadoUpsertWithoutSedesInput", {
  isAbstract: true
})
export class EstadoUpsertWithoutSedesInput {
  @TypeGraphQL.Field(_type => EstadoUpdateWithoutSedesInput, {
    nullable: false
  })
  update!: EstadoUpdateWithoutSedesInput;

  @TypeGraphQL.Field(_type => EstadoCreateWithoutSedesInput, {
    nullable: false
  })
  create!: EstadoCreateWithoutSedesInput;
}

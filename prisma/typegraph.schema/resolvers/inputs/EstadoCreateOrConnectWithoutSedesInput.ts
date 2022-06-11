import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { EstadoCreateWithoutSedesInput } from "../inputs/EstadoCreateWithoutSedesInput";
import { EstadoWhereUniqueInput } from "../inputs/EstadoWhereUniqueInput";

@TypeGraphQL.InputType("EstadoCreateOrConnectWithoutSedesInput", {
  isAbstract: true
})
export class EstadoCreateOrConnectWithoutSedesInput {
  @TypeGraphQL.Field(_type => EstadoWhereUniqueInput, {
    nullable: false
  })
  where!: EstadoWhereUniqueInput;

  @TypeGraphQL.Field(_type => EstadoCreateWithoutSedesInput, {
    nullable: false
  })
  create!: EstadoCreateWithoutSedesInput;
}

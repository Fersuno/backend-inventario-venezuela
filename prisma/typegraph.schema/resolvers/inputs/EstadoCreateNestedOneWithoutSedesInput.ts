import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { EstadoCreateOrConnectWithoutSedesInput } from "../inputs/EstadoCreateOrConnectWithoutSedesInput";
import { EstadoCreateWithoutSedesInput } from "../inputs/EstadoCreateWithoutSedesInput";
import { EstadoWhereUniqueInput } from "../inputs/EstadoWhereUniqueInput";

@TypeGraphQL.InputType("EstadoCreateNestedOneWithoutSedesInput", {
  isAbstract: true
})
export class EstadoCreateNestedOneWithoutSedesInput {
  @TypeGraphQL.Field(_type => EstadoCreateWithoutSedesInput, {
    nullable: true
  })
  create?: EstadoCreateWithoutSedesInput | undefined;

  @TypeGraphQL.Field(_type => EstadoCreateOrConnectWithoutSedesInput, {
    nullable: true
  })
  connectOrCreate?: EstadoCreateOrConnectWithoutSedesInput | undefined;

  @TypeGraphQL.Field(_type => EstadoWhereUniqueInput, {
    nullable: true
  })
  connect?: EstadoWhereUniqueInput | undefined;
}

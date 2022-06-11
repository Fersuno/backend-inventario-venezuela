import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { EstadoCreateOrConnectWithoutSedesInput } from "../inputs/EstadoCreateOrConnectWithoutSedesInput";
import { EstadoCreateWithoutSedesInput } from "../inputs/EstadoCreateWithoutSedesInput";
import { EstadoUpdateWithoutSedesInput } from "../inputs/EstadoUpdateWithoutSedesInput";
import { EstadoUpsertWithoutSedesInput } from "../inputs/EstadoUpsertWithoutSedesInput";
import { EstadoWhereUniqueInput } from "../inputs/EstadoWhereUniqueInput";

@TypeGraphQL.InputType("EstadoUpdateOneRequiredWithoutSedesInput", {
  isAbstract: true
})
export class EstadoUpdateOneRequiredWithoutSedesInput {
  @TypeGraphQL.Field(_type => EstadoCreateWithoutSedesInput, {
    nullable: true
  })
  create?: EstadoCreateWithoutSedesInput | undefined;

  @TypeGraphQL.Field(_type => EstadoCreateOrConnectWithoutSedesInput, {
    nullable: true
  })
  connectOrCreate?: EstadoCreateOrConnectWithoutSedesInput | undefined;

  @TypeGraphQL.Field(_type => EstadoUpsertWithoutSedesInput, {
    nullable: true
  })
  upsert?: EstadoUpsertWithoutSedesInput | undefined;

  @TypeGraphQL.Field(_type => EstadoWhereUniqueInput, {
    nullable: true
  })
  connect?: EstadoWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => EstadoUpdateWithoutSedesInput, {
    nullable: true
  })
  update?: EstadoUpdateWithoutSedesInput | undefined;
}

import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { SedeCreateOrConnectWithoutMovimientosDestinoInput } from "../inputs/SedeCreateOrConnectWithoutMovimientosDestinoInput";
import { SedeCreateWithoutMovimientosDestinoInput } from "../inputs/SedeCreateWithoutMovimientosDestinoInput";
import { SedeWhereUniqueInput } from "../inputs/SedeWhereUniqueInput";

@TypeGraphQL.InputType("SedeCreateNestedOneWithoutMovimientosDestinoInput", {
  isAbstract: true
})
export class SedeCreateNestedOneWithoutMovimientosDestinoInput {
  @TypeGraphQL.Field(_type => SedeCreateWithoutMovimientosDestinoInput, {
    nullable: true
  })
  create?: SedeCreateWithoutMovimientosDestinoInput | undefined;

  @TypeGraphQL.Field(_type => SedeCreateOrConnectWithoutMovimientosDestinoInput, {
    nullable: true
  })
  connectOrCreate?: SedeCreateOrConnectWithoutMovimientosDestinoInput | undefined;

  @TypeGraphQL.Field(_type => SedeWhereUniqueInput, {
    nullable: true
  })
  connect?: SedeWhereUniqueInput | undefined;
}

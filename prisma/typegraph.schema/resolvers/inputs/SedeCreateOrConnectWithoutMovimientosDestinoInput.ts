import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { SedeCreateWithoutMovimientosDestinoInput } from "../inputs/SedeCreateWithoutMovimientosDestinoInput";
import { SedeWhereUniqueInput } from "../inputs/SedeWhereUniqueInput";

@TypeGraphQL.InputType("SedeCreateOrConnectWithoutMovimientosDestinoInput", {
  isAbstract: true
})
export class SedeCreateOrConnectWithoutMovimientosDestinoInput {
  @TypeGraphQL.Field(_type => SedeWhereUniqueInput, {
    nullable: false
  })
  where!: SedeWhereUniqueInput;

  @TypeGraphQL.Field(_type => SedeCreateWithoutMovimientosDestinoInput, {
    nullable: false
  })
  create!: SedeCreateWithoutMovimientosDestinoInput;
}

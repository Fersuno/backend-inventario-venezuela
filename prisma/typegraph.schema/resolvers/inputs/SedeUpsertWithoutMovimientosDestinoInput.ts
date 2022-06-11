import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { SedeCreateWithoutMovimientosDestinoInput } from "../inputs/SedeCreateWithoutMovimientosDestinoInput";
import { SedeUpdateWithoutMovimientosDestinoInput } from "../inputs/SedeUpdateWithoutMovimientosDestinoInput";

@TypeGraphQL.InputType("SedeUpsertWithoutMovimientosDestinoInput", {
  isAbstract: true
})
export class SedeUpsertWithoutMovimientosDestinoInput {
  @TypeGraphQL.Field(_type => SedeUpdateWithoutMovimientosDestinoInput, {
    nullable: false
  })
  update!: SedeUpdateWithoutMovimientosDestinoInput;

  @TypeGraphQL.Field(_type => SedeCreateWithoutMovimientosDestinoInput, {
    nullable: false
  })
  create!: SedeCreateWithoutMovimientosDestinoInput;
}

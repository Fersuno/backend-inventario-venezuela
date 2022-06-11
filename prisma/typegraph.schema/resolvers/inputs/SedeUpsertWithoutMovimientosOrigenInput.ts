import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { SedeCreateWithoutMovimientosOrigenInput } from "../inputs/SedeCreateWithoutMovimientosOrigenInput";
import { SedeUpdateWithoutMovimientosOrigenInput } from "../inputs/SedeUpdateWithoutMovimientosOrigenInput";

@TypeGraphQL.InputType("SedeUpsertWithoutMovimientosOrigenInput", {
  isAbstract: true
})
export class SedeUpsertWithoutMovimientosOrigenInput {
  @TypeGraphQL.Field(_type => SedeUpdateWithoutMovimientosOrigenInput, {
    nullable: false
  })
  update!: SedeUpdateWithoutMovimientosOrigenInput;

  @TypeGraphQL.Field(_type => SedeCreateWithoutMovimientosOrigenInput, {
    nullable: false
  })
  create!: SedeCreateWithoutMovimientosOrigenInput;
}

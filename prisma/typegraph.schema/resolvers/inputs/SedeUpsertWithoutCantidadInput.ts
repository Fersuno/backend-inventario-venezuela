import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { SedeCreateWithoutCantidadInput } from "../inputs/SedeCreateWithoutCantidadInput";
import { SedeUpdateWithoutCantidadInput } from "../inputs/SedeUpdateWithoutCantidadInput";

@TypeGraphQL.InputType("SedeUpsertWithoutCantidadInput", {
  isAbstract: true
})
export class SedeUpsertWithoutCantidadInput {
  @TypeGraphQL.Field(_type => SedeUpdateWithoutCantidadInput, {
    nullable: false
  })
  update!: SedeUpdateWithoutCantidadInput;

  @TypeGraphQL.Field(_type => SedeCreateWithoutCantidadInput, {
    nullable: false
  })
  create!: SedeCreateWithoutCantidadInput;
}

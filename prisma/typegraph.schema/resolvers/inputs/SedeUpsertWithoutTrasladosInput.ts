import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { SedeCreateWithoutTrasladosInput } from "../inputs/SedeCreateWithoutTrasladosInput";
import { SedeUpdateWithoutTrasladosInput } from "../inputs/SedeUpdateWithoutTrasladosInput";

@TypeGraphQL.InputType("SedeUpsertWithoutTrasladosInput", {
  isAbstract: true
})
export class SedeUpsertWithoutTrasladosInput {
  @TypeGraphQL.Field(_type => SedeUpdateWithoutTrasladosInput, {
    nullable: false
  })
  update!: SedeUpdateWithoutTrasladosInput;

  @TypeGraphQL.Field(_type => SedeCreateWithoutTrasladosInput, {
    nullable: false
  })
  create!: SedeCreateWithoutTrasladosInput;
}

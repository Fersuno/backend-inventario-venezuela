import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { SedeCreateWithoutTrasladosInput } from "../inputs/SedeCreateWithoutTrasladosInput";
import { SedeWhereUniqueInput } from "../inputs/SedeWhereUniqueInput";

@TypeGraphQL.InputType("SedeCreateOrConnectWithoutTrasladosInput", {
  isAbstract: true
})
export class SedeCreateOrConnectWithoutTrasladosInput {
  @TypeGraphQL.Field(_type => SedeWhereUniqueInput, {
    nullable: false
  })
  where!: SedeWhereUniqueInput;

  @TypeGraphQL.Field(_type => SedeCreateWithoutTrasladosInput, {
    nullable: false
  })
  create!: SedeCreateWithoutTrasladosInput;
}

import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { SedeCreateWithoutCantidadInput } from "../inputs/SedeCreateWithoutCantidadInput";
import { SedeWhereUniqueInput } from "../inputs/SedeWhereUniqueInput";

@TypeGraphQL.InputType("SedeCreateOrConnectWithoutCantidadInput", {
  isAbstract: true
})
export class SedeCreateOrConnectWithoutCantidadInput {
  @TypeGraphQL.Field(_type => SedeWhereUniqueInput, {
    nullable: false
  })
  where!: SedeWhereUniqueInput;

  @TypeGraphQL.Field(_type => SedeCreateWithoutCantidadInput, {
    nullable: false
  })
  create!: SedeCreateWithoutCantidadInput;
}

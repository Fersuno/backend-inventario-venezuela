import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { SedeCreateWithoutEstadoInput } from "../inputs/SedeCreateWithoutEstadoInput";
import { SedeWhereUniqueInput } from "../inputs/SedeWhereUniqueInput";

@TypeGraphQL.InputType("SedeCreateOrConnectWithoutEstadoInput", {
  isAbstract: true
})
export class SedeCreateOrConnectWithoutEstadoInput {
  @TypeGraphQL.Field(_type => SedeWhereUniqueInput, {
    nullable: false
  })
  where!: SedeWhereUniqueInput;

  @TypeGraphQL.Field(_type => SedeCreateWithoutEstadoInput, {
    nullable: false
  })
  create!: SedeCreateWithoutEstadoInput;
}

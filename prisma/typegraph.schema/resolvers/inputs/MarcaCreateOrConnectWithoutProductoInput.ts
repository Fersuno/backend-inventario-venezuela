import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { MarcaCreateWithoutProductoInput } from "../inputs/MarcaCreateWithoutProductoInput";
import { MarcaWhereUniqueInput } from "../inputs/MarcaWhereUniqueInput";

@TypeGraphQL.InputType("MarcaCreateOrConnectWithoutProductoInput", {
  isAbstract: true
})
export class MarcaCreateOrConnectWithoutProductoInput {
  @TypeGraphQL.Field(_type => MarcaWhereUniqueInput, {
    nullable: false
  })
  where!: MarcaWhereUniqueInput;

  @TypeGraphQL.Field(_type => MarcaCreateWithoutProductoInput, {
    nullable: false
  })
  create!: MarcaCreateWithoutProductoInput;
}

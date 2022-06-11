import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { MarcaCreateWithoutProductoInput } from "../inputs/MarcaCreateWithoutProductoInput";
import { MarcaUpdateWithoutProductoInput } from "../inputs/MarcaUpdateWithoutProductoInput";

@TypeGraphQL.InputType("MarcaUpsertWithoutProductoInput", {
  isAbstract: true
})
export class MarcaUpsertWithoutProductoInput {
  @TypeGraphQL.Field(_type => MarcaUpdateWithoutProductoInput, {
    nullable: false
  })
  update!: MarcaUpdateWithoutProductoInput;

  @TypeGraphQL.Field(_type => MarcaCreateWithoutProductoInput, {
    nullable: false
  })
  create!: MarcaCreateWithoutProductoInput;
}

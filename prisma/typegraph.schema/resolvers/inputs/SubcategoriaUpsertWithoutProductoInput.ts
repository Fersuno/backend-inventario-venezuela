import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { SubcategoriaCreateWithoutProductoInput } from "../inputs/SubcategoriaCreateWithoutProductoInput";
import { SubcategoriaUpdateWithoutProductoInput } from "../inputs/SubcategoriaUpdateWithoutProductoInput";

@TypeGraphQL.InputType("SubcategoriaUpsertWithoutProductoInput", {
  isAbstract: true
})
export class SubcategoriaUpsertWithoutProductoInput {
  @TypeGraphQL.Field(_type => SubcategoriaUpdateWithoutProductoInput, {
    nullable: false
  })
  update!: SubcategoriaUpdateWithoutProductoInput;

  @TypeGraphQL.Field(_type => SubcategoriaCreateWithoutProductoInput, {
    nullable: false
  })
  create!: SubcategoriaCreateWithoutProductoInput;
}

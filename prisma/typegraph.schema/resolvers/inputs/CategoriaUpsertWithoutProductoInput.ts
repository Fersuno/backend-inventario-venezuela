import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { CategoriaCreateWithoutProductoInput } from "../inputs/CategoriaCreateWithoutProductoInput";
import { CategoriaUpdateWithoutProductoInput } from "../inputs/CategoriaUpdateWithoutProductoInput";

@TypeGraphQL.InputType("CategoriaUpsertWithoutProductoInput", {
  isAbstract: true
})
export class CategoriaUpsertWithoutProductoInput {
  @TypeGraphQL.Field(_type => CategoriaUpdateWithoutProductoInput, {
    nullable: false
  })
  update!: CategoriaUpdateWithoutProductoInput;

  @TypeGraphQL.Field(_type => CategoriaCreateWithoutProductoInput, {
    nullable: false
  })
  create!: CategoriaCreateWithoutProductoInput;
}

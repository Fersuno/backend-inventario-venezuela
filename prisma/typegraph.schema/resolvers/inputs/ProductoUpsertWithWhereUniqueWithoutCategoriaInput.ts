import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ProductoCreateWithoutCategoriaInput } from "../inputs/ProductoCreateWithoutCategoriaInput";
import { ProductoUpdateWithoutCategoriaInput } from "../inputs/ProductoUpdateWithoutCategoriaInput";
import { ProductoWhereUniqueInput } from "../inputs/ProductoWhereUniqueInput";

@TypeGraphQL.InputType("ProductoUpsertWithWhereUniqueWithoutCategoriaInput", {
  isAbstract: true
})
export class ProductoUpsertWithWhereUniqueWithoutCategoriaInput {
  @TypeGraphQL.Field(_type => ProductoWhereUniqueInput, {
    nullable: false
  })
  where!: ProductoWhereUniqueInput;

  @TypeGraphQL.Field(_type => ProductoUpdateWithoutCategoriaInput, {
    nullable: false
  })
  update!: ProductoUpdateWithoutCategoriaInput;

  @TypeGraphQL.Field(_type => ProductoCreateWithoutCategoriaInput, {
    nullable: false
  })
  create!: ProductoCreateWithoutCategoriaInput;
}

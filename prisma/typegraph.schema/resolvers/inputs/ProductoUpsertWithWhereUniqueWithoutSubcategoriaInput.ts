import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ProductoCreateWithoutSubcategoriaInput } from "../inputs/ProductoCreateWithoutSubcategoriaInput";
import { ProductoUpdateWithoutSubcategoriaInput } from "../inputs/ProductoUpdateWithoutSubcategoriaInput";
import { ProductoWhereUniqueInput } from "../inputs/ProductoWhereUniqueInput";

@TypeGraphQL.InputType("ProductoUpsertWithWhereUniqueWithoutSubcategoriaInput", {
  isAbstract: true
})
export class ProductoUpsertWithWhereUniqueWithoutSubcategoriaInput {
  @TypeGraphQL.Field(_type => ProductoWhereUniqueInput, {
    nullable: false
  })
  where!: ProductoWhereUniqueInput;

  @TypeGraphQL.Field(_type => ProductoUpdateWithoutSubcategoriaInput, {
    nullable: false
  })
  update!: ProductoUpdateWithoutSubcategoriaInput;

  @TypeGraphQL.Field(_type => ProductoCreateWithoutSubcategoriaInput, {
    nullable: false
  })
  create!: ProductoCreateWithoutSubcategoriaInput;
}

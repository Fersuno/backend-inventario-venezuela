import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ProductoUpdateWithoutSubcategoriaInput } from "../inputs/ProductoUpdateWithoutSubcategoriaInput";
import { ProductoWhereUniqueInput } from "../inputs/ProductoWhereUniqueInput";

@TypeGraphQL.InputType("ProductoUpdateWithWhereUniqueWithoutSubcategoriaInput", {
  isAbstract: true
})
export class ProductoUpdateWithWhereUniqueWithoutSubcategoriaInput {
  @TypeGraphQL.Field(_type => ProductoWhereUniqueInput, {
    nullable: false
  })
  where!: ProductoWhereUniqueInput;

  @TypeGraphQL.Field(_type => ProductoUpdateWithoutSubcategoriaInput, {
    nullable: false
  })
  data!: ProductoUpdateWithoutSubcategoriaInput;
}

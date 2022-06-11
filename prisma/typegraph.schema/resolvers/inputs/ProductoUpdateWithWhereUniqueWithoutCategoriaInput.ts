import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ProductoUpdateWithoutCategoriaInput } from "../inputs/ProductoUpdateWithoutCategoriaInput";
import { ProductoWhereUniqueInput } from "../inputs/ProductoWhereUniqueInput";

@TypeGraphQL.InputType("ProductoUpdateWithWhereUniqueWithoutCategoriaInput", {
  isAbstract: true
})
export class ProductoUpdateWithWhereUniqueWithoutCategoriaInput {
  @TypeGraphQL.Field(_type => ProductoWhereUniqueInput, {
    nullable: false
  })
  where!: ProductoWhereUniqueInput;

  @TypeGraphQL.Field(_type => ProductoUpdateWithoutCategoriaInput, {
    nullable: false
  })
  data!: ProductoUpdateWithoutCategoriaInput;
}

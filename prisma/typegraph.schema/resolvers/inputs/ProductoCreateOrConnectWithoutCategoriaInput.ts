import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ProductoCreateWithoutCategoriaInput } from "../inputs/ProductoCreateWithoutCategoriaInput";
import { ProductoWhereUniqueInput } from "../inputs/ProductoWhereUniqueInput";

@TypeGraphQL.InputType("ProductoCreateOrConnectWithoutCategoriaInput", {
  isAbstract: true
})
export class ProductoCreateOrConnectWithoutCategoriaInput {
  @TypeGraphQL.Field(_type => ProductoWhereUniqueInput, {
    nullable: false
  })
  where!: ProductoWhereUniqueInput;

  @TypeGraphQL.Field(_type => ProductoCreateWithoutCategoriaInput, {
    nullable: false
  })
  create!: ProductoCreateWithoutCategoriaInput;
}

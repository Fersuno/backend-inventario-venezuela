import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ProductoCreateWithoutSubcategoriaInput } from "../inputs/ProductoCreateWithoutSubcategoriaInput";
import { ProductoWhereUniqueInput } from "../inputs/ProductoWhereUniqueInput";

@TypeGraphQL.InputType("ProductoCreateOrConnectWithoutSubcategoriaInput", {
  isAbstract: true
})
export class ProductoCreateOrConnectWithoutSubcategoriaInput {
  @TypeGraphQL.Field(_type => ProductoWhereUniqueInput, {
    nullable: false
  })
  where!: ProductoWhereUniqueInput;

  @TypeGraphQL.Field(_type => ProductoCreateWithoutSubcategoriaInput, {
    nullable: false
  })
  create!: ProductoCreateWithoutSubcategoriaInput;
}

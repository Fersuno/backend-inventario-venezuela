import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ProductoCreateWithoutMarcaInput } from "../inputs/ProductoCreateWithoutMarcaInput";
import { ProductoWhereUniqueInput } from "../inputs/ProductoWhereUniqueInput";

@TypeGraphQL.InputType("ProductoCreateOrConnectWithoutMarcaInput", {
  isAbstract: true
})
export class ProductoCreateOrConnectWithoutMarcaInput {
  @TypeGraphQL.Field(_type => ProductoWhereUniqueInput, {
    nullable: false
  })
  where!: ProductoWhereUniqueInput;

  @TypeGraphQL.Field(_type => ProductoCreateWithoutMarcaInput, {
    nullable: false
  })
  create!: ProductoCreateWithoutMarcaInput;
}

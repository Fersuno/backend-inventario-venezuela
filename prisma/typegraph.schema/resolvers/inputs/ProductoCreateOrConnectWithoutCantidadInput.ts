import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ProductoCreateWithoutCantidadInput } from "../inputs/ProductoCreateWithoutCantidadInput";
import { ProductoWhereUniqueInput } from "../inputs/ProductoWhereUniqueInput";

@TypeGraphQL.InputType("ProductoCreateOrConnectWithoutCantidadInput", {
  isAbstract: true
})
export class ProductoCreateOrConnectWithoutCantidadInput {
  @TypeGraphQL.Field(_type => ProductoWhereUniqueInput, {
    nullable: false
  })
  where!: ProductoWhereUniqueInput;

  @TypeGraphQL.Field(_type => ProductoCreateWithoutCantidadInput, {
    nullable: false
  })
  create!: ProductoCreateWithoutCantidadInput;
}

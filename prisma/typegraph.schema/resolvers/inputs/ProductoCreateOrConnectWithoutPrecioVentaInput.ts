import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ProductoCreateWithoutPrecioVentaInput } from "../inputs/ProductoCreateWithoutPrecioVentaInput";
import { ProductoWhereUniqueInput } from "../inputs/ProductoWhereUniqueInput";

@TypeGraphQL.InputType("ProductoCreateOrConnectWithoutPrecioVentaInput", {
  isAbstract: true
})
export class ProductoCreateOrConnectWithoutPrecioVentaInput {
  @TypeGraphQL.Field(_type => ProductoWhereUniqueInput, {
    nullable: false
  })
  where!: ProductoWhereUniqueInput;

  @TypeGraphQL.Field(_type => ProductoCreateWithoutPrecioVentaInput, {
    nullable: false
  })
  create!: ProductoCreateWithoutPrecioVentaInput;
}

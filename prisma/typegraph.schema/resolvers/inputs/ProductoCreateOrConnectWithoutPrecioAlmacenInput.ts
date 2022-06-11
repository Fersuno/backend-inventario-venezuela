import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ProductoCreateWithoutPrecioAlmacenInput } from "../inputs/ProductoCreateWithoutPrecioAlmacenInput";
import { ProductoWhereUniqueInput } from "../inputs/ProductoWhereUniqueInput";

@TypeGraphQL.InputType("ProductoCreateOrConnectWithoutPrecioAlmacenInput", {
  isAbstract: true
})
export class ProductoCreateOrConnectWithoutPrecioAlmacenInput {
  @TypeGraphQL.Field(_type => ProductoWhereUniqueInput, {
    nullable: false
  })
  where!: ProductoWhereUniqueInput;

  @TypeGraphQL.Field(_type => ProductoCreateWithoutPrecioAlmacenInput, {
    nullable: false
  })
  create!: ProductoCreateWithoutPrecioAlmacenInput;
}

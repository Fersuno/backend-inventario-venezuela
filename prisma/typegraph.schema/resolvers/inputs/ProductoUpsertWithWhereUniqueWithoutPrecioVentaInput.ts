import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ProductoCreateWithoutPrecioVentaInput } from "../inputs/ProductoCreateWithoutPrecioVentaInput";
import { ProductoUpdateWithoutPrecioVentaInput } from "../inputs/ProductoUpdateWithoutPrecioVentaInput";
import { ProductoWhereUniqueInput } from "../inputs/ProductoWhereUniqueInput";

@TypeGraphQL.InputType("ProductoUpsertWithWhereUniqueWithoutPrecioVentaInput", {
  isAbstract: true
})
export class ProductoUpsertWithWhereUniqueWithoutPrecioVentaInput {
  @TypeGraphQL.Field(_type => ProductoWhereUniqueInput, {
    nullable: false
  })
  where!: ProductoWhereUniqueInput;

  @TypeGraphQL.Field(_type => ProductoUpdateWithoutPrecioVentaInput, {
    nullable: false
  })
  update!: ProductoUpdateWithoutPrecioVentaInput;

  @TypeGraphQL.Field(_type => ProductoCreateWithoutPrecioVentaInput, {
    nullable: false
  })
  create!: ProductoCreateWithoutPrecioVentaInput;
}

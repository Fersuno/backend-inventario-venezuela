import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ProductoUpdateWithoutPrecioVentaInput } from "../inputs/ProductoUpdateWithoutPrecioVentaInput";
import { ProductoWhereUniqueInput } from "../inputs/ProductoWhereUniqueInput";

@TypeGraphQL.InputType("ProductoUpdateWithWhereUniqueWithoutPrecioVentaInput", {
  isAbstract: true
})
export class ProductoUpdateWithWhereUniqueWithoutPrecioVentaInput {
  @TypeGraphQL.Field(_type => ProductoWhereUniqueInput, {
    nullable: false
  })
  where!: ProductoWhereUniqueInput;

  @TypeGraphQL.Field(_type => ProductoUpdateWithoutPrecioVentaInput, {
    nullable: false
  })
  data!: ProductoUpdateWithoutPrecioVentaInput;
}

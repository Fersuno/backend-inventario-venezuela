import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ProductoCreateWithoutPrecioAlmacenInput } from "../inputs/ProductoCreateWithoutPrecioAlmacenInput";
import { ProductoUpdateWithoutPrecioAlmacenInput } from "../inputs/ProductoUpdateWithoutPrecioAlmacenInput";
import { ProductoWhereUniqueInput } from "../inputs/ProductoWhereUniqueInput";

@TypeGraphQL.InputType("ProductoUpsertWithWhereUniqueWithoutPrecioAlmacenInput", {
  isAbstract: true
})
export class ProductoUpsertWithWhereUniqueWithoutPrecioAlmacenInput {
  @TypeGraphQL.Field(_type => ProductoWhereUniqueInput, {
    nullable: false
  })
  where!: ProductoWhereUniqueInput;

  @TypeGraphQL.Field(_type => ProductoUpdateWithoutPrecioAlmacenInput, {
    nullable: false
  })
  update!: ProductoUpdateWithoutPrecioAlmacenInput;

  @TypeGraphQL.Field(_type => ProductoCreateWithoutPrecioAlmacenInput, {
    nullable: false
  })
  create!: ProductoCreateWithoutPrecioAlmacenInput;
}

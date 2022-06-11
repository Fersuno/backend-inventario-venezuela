import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ProductoUpdateWithoutPrecioAlmacenInput } from "../inputs/ProductoUpdateWithoutPrecioAlmacenInput";
import { ProductoWhereUniqueInput } from "../inputs/ProductoWhereUniqueInput";

@TypeGraphQL.InputType("ProductoUpdateWithWhereUniqueWithoutPrecioAlmacenInput", {
  isAbstract: true
})
export class ProductoUpdateWithWhereUniqueWithoutPrecioAlmacenInput {
  @TypeGraphQL.Field(_type => ProductoWhereUniqueInput, {
    nullable: false
  })
  where!: ProductoWhereUniqueInput;

  @TypeGraphQL.Field(_type => ProductoUpdateWithoutPrecioAlmacenInput, {
    nullable: false
  })
  data!: ProductoUpdateWithoutPrecioAlmacenInput;
}

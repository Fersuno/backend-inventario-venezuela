import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ProductoCreateWithoutCantidadInput } from "../inputs/ProductoCreateWithoutCantidadInput";
import { ProductoUpdateWithoutCantidadInput } from "../inputs/ProductoUpdateWithoutCantidadInput";

@TypeGraphQL.InputType("ProductoUpsertWithoutCantidadInput", {
  isAbstract: true
})
export class ProductoUpsertWithoutCantidadInput {
  @TypeGraphQL.Field(_type => ProductoUpdateWithoutCantidadInput, {
    nullable: false
  })
  update!: ProductoUpdateWithoutCantidadInput;

  @TypeGraphQL.Field(_type => ProductoCreateWithoutCantidadInput, {
    nullable: false
  })
  create!: ProductoCreateWithoutCantidadInput;
}

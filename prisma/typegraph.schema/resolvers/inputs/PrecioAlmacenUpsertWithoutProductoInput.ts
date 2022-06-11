import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PrecioAlmacenCreateWithoutProductoInput } from "../inputs/PrecioAlmacenCreateWithoutProductoInput";
import { PrecioAlmacenUpdateWithoutProductoInput } from "../inputs/PrecioAlmacenUpdateWithoutProductoInput";

@TypeGraphQL.InputType("PrecioAlmacenUpsertWithoutProductoInput", {
  isAbstract: true
})
export class PrecioAlmacenUpsertWithoutProductoInput {
  @TypeGraphQL.Field(_type => PrecioAlmacenUpdateWithoutProductoInput, {
    nullable: false
  })
  update!: PrecioAlmacenUpdateWithoutProductoInput;

  @TypeGraphQL.Field(_type => PrecioAlmacenCreateWithoutProductoInput, {
    nullable: false
  })
  create!: PrecioAlmacenCreateWithoutProductoInput;
}

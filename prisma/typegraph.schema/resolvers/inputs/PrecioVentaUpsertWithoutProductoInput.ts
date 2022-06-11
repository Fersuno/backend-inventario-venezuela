import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PrecioVentaCreateWithoutProductoInput } from "../inputs/PrecioVentaCreateWithoutProductoInput";
import { PrecioVentaUpdateWithoutProductoInput } from "../inputs/PrecioVentaUpdateWithoutProductoInput";

@TypeGraphQL.InputType("PrecioVentaUpsertWithoutProductoInput", {
  isAbstract: true
})
export class PrecioVentaUpsertWithoutProductoInput {
  @TypeGraphQL.Field(_type => PrecioVentaUpdateWithoutProductoInput, {
    nullable: false
  })
  update!: PrecioVentaUpdateWithoutProductoInput;

  @TypeGraphQL.Field(_type => PrecioVentaCreateWithoutProductoInput, {
    nullable: false
  })
  create!: PrecioVentaCreateWithoutProductoInput;
}

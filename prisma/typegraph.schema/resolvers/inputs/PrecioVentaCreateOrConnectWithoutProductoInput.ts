import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PrecioVentaCreateWithoutProductoInput } from "../inputs/PrecioVentaCreateWithoutProductoInput";
import { PrecioVentaWhereUniqueInput } from "../inputs/PrecioVentaWhereUniqueInput";

@TypeGraphQL.InputType("PrecioVentaCreateOrConnectWithoutProductoInput", {
  isAbstract: true
})
export class PrecioVentaCreateOrConnectWithoutProductoInput {
  @TypeGraphQL.Field(_type => PrecioVentaWhereUniqueInput, {
    nullable: false
  })
  where!: PrecioVentaWhereUniqueInput;

  @TypeGraphQL.Field(_type => PrecioVentaCreateWithoutProductoInput, {
    nullable: false
  })
  create!: PrecioVentaCreateWithoutProductoInput;
}

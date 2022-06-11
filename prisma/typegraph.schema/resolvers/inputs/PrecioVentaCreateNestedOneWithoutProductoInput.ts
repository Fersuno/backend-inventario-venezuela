import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PrecioVentaCreateOrConnectWithoutProductoInput } from "../inputs/PrecioVentaCreateOrConnectWithoutProductoInput";
import { PrecioVentaCreateWithoutProductoInput } from "../inputs/PrecioVentaCreateWithoutProductoInput";
import { PrecioVentaWhereUniqueInput } from "../inputs/PrecioVentaWhereUniqueInput";

@TypeGraphQL.InputType("PrecioVentaCreateNestedOneWithoutProductoInput", {
  isAbstract: true
})
export class PrecioVentaCreateNestedOneWithoutProductoInput {
  @TypeGraphQL.Field(_type => PrecioVentaCreateWithoutProductoInput, {
    nullable: true
  })
  create?: PrecioVentaCreateWithoutProductoInput | undefined;

  @TypeGraphQL.Field(_type => PrecioVentaCreateOrConnectWithoutProductoInput, {
    nullable: true
  })
  connectOrCreate?: PrecioVentaCreateOrConnectWithoutProductoInput | undefined;

  @TypeGraphQL.Field(_type => PrecioVentaWhereUniqueInput, {
    nullable: true
  })
  connect?: PrecioVentaWhereUniqueInput | undefined;
}

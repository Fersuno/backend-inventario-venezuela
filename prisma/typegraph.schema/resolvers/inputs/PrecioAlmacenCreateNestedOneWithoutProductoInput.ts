import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PrecioAlmacenCreateOrConnectWithoutProductoInput } from "../inputs/PrecioAlmacenCreateOrConnectWithoutProductoInput";
import { PrecioAlmacenCreateWithoutProductoInput } from "../inputs/PrecioAlmacenCreateWithoutProductoInput";
import { PrecioAlmacenWhereUniqueInput } from "../inputs/PrecioAlmacenWhereUniqueInput";

@TypeGraphQL.InputType("PrecioAlmacenCreateNestedOneWithoutProductoInput", {
  isAbstract: true
})
export class PrecioAlmacenCreateNestedOneWithoutProductoInput {
  @TypeGraphQL.Field(_type => PrecioAlmacenCreateWithoutProductoInput, {
    nullable: true
  })
  create?: PrecioAlmacenCreateWithoutProductoInput | undefined;

  @TypeGraphQL.Field(_type => PrecioAlmacenCreateOrConnectWithoutProductoInput, {
    nullable: true
  })
  connectOrCreate?: PrecioAlmacenCreateOrConnectWithoutProductoInput | undefined;

  @TypeGraphQL.Field(_type => PrecioAlmacenWhereUniqueInput, {
    nullable: true
  })
  connect?: PrecioAlmacenWhereUniqueInput | undefined;
}

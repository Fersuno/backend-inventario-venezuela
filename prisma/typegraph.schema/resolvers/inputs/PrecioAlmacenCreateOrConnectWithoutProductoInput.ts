import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PrecioAlmacenCreateWithoutProductoInput } from "../inputs/PrecioAlmacenCreateWithoutProductoInput";
import { PrecioAlmacenWhereUniqueInput } from "../inputs/PrecioAlmacenWhereUniqueInput";

@TypeGraphQL.InputType("PrecioAlmacenCreateOrConnectWithoutProductoInput", {
  isAbstract: true
})
export class PrecioAlmacenCreateOrConnectWithoutProductoInput {
  @TypeGraphQL.Field(_type => PrecioAlmacenWhereUniqueInput, {
    nullable: false
  })
  where!: PrecioAlmacenWhereUniqueInput;

  @TypeGraphQL.Field(_type => PrecioAlmacenCreateWithoutProductoInput, {
    nullable: false
  })
  create!: PrecioAlmacenCreateWithoutProductoInput;
}

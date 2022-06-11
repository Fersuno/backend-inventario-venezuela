import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ProductoCreateOrConnectWithoutCantidadInput } from "../inputs/ProductoCreateOrConnectWithoutCantidadInput";
import { ProductoCreateWithoutCantidadInput } from "../inputs/ProductoCreateWithoutCantidadInput";
import { ProductoWhereUniqueInput } from "../inputs/ProductoWhereUniqueInput";

@TypeGraphQL.InputType("ProductoCreateNestedOneWithoutCantidadInput", {
  isAbstract: true
})
export class ProductoCreateNestedOneWithoutCantidadInput {
  @TypeGraphQL.Field(_type => ProductoCreateWithoutCantidadInput, {
    nullable: true
  })
  create?: ProductoCreateWithoutCantidadInput | undefined;

  @TypeGraphQL.Field(_type => ProductoCreateOrConnectWithoutCantidadInput, {
    nullable: true
  })
  connectOrCreate?: ProductoCreateOrConnectWithoutCantidadInput | undefined;

  @TypeGraphQL.Field(_type => ProductoWhereUniqueInput, {
    nullable: true
  })
  connect?: ProductoWhereUniqueInput | undefined;
}

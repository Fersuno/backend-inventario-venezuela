import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ProductoCreateManyPrecioVentaInputEnvelope } from "../inputs/ProductoCreateManyPrecioVentaInputEnvelope";
import { ProductoCreateOrConnectWithoutPrecioVentaInput } from "../inputs/ProductoCreateOrConnectWithoutPrecioVentaInput";
import { ProductoCreateWithoutPrecioVentaInput } from "../inputs/ProductoCreateWithoutPrecioVentaInput";
import { ProductoWhereUniqueInput } from "../inputs/ProductoWhereUniqueInput";

@TypeGraphQL.InputType("ProductoCreateNestedManyWithoutPrecioVentaInput", {
  isAbstract: true
})
export class ProductoCreateNestedManyWithoutPrecioVentaInput {
  @TypeGraphQL.Field(_type => [ProductoCreateWithoutPrecioVentaInput], {
    nullable: true
  })
  create?: ProductoCreateWithoutPrecioVentaInput[] | undefined;

  @TypeGraphQL.Field(_type => [ProductoCreateOrConnectWithoutPrecioVentaInput], {
    nullable: true
  })
  connectOrCreate?: ProductoCreateOrConnectWithoutPrecioVentaInput[] | undefined;

  @TypeGraphQL.Field(_type => ProductoCreateManyPrecioVentaInputEnvelope, {
    nullable: true
  })
  createMany?: ProductoCreateManyPrecioVentaInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [ProductoWhereUniqueInput], {
    nullable: true
  })
  connect?: ProductoWhereUniqueInput[] | undefined;
}

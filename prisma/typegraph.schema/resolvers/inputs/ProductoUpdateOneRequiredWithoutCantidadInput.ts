import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ProductoCreateOrConnectWithoutCantidadInput } from "../inputs/ProductoCreateOrConnectWithoutCantidadInput";
import { ProductoCreateWithoutCantidadInput } from "../inputs/ProductoCreateWithoutCantidadInput";
import { ProductoUpdateWithoutCantidadInput } from "../inputs/ProductoUpdateWithoutCantidadInput";
import { ProductoUpsertWithoutCantidadInput } from "../inputs/ProductoUpsertWithoutCantidadInput";
import { ProductoWhereUniqueInput } from "../inputs/ProductoWhereUniqueInput";

@TypeGraphQL.InputType("ProductoUpdateOneRequiredWithoutCantidadInput", {
  isAbstract: true
})
export class ProductoUpdateOneRequiredWithoutCantidadInput {
  @TypeGraphQL.Field(_type => ProductoCreateWithoutCantidadInput, {
    nullable: true
  })
  create?: ProductoCreateWithoutCantidadInput | undefined;

  @TypeGraphQL.Field(_type => ProductoCreateOrConnectWithoutCantidadInput, {
    nullable: true
  })
  connectOrCreate?: ProductoCreateOrConnectWithoutCantidadInput | undefined;

  @TypeGraphQL.Field(_type => ProductoUpsertWithoutCantidadInput, {
    nullable: true
  })
  upsert?: ProductoUpsertWithoutCantidadInput | undefined;

  @TypeGraphQL.Field(_type => ProductoWhereUniqueInput, {
    nullable: true
  })
  connect?: ProductoWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => ProductoUpdateWithoutCantidadInput, {
    nullable: true
  })
  update?: ProductoUpdateWithoutCantidadInput | undefined;
}

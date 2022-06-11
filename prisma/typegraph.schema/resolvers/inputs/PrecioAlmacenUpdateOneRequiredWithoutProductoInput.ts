import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PrecioAlmacenCreateOrConnectWithoutProductoInput } from "../inputs/PrecioAlmacenCreateOrConnectWithoutProductoInput";
import { PrecioAlmacenCreateWithoutProductoInput } from "../inputs/PrecioAlmacenCreateWithoutProductoInput";
import { PrecioAlmacenUpdateWithoutProductoInput } from "../inputs/PrecioAlmacenUpdateWithoutProductoInput";
import { PrecioAlmacenUpsertWithoutProductoInput } from "../inputs/PrecioAlmacenUpsertWithoutProductoInput";
import { PrecioAlmacenWhereUniqueInput } from "../inputs/PrecioAlmacenWhereUniqueInput";

@TypeGraphQL.InputType("PrecioAlmacenUpdateOneRequiredWithoutProductoInput", {
  isAbstract: true
})
export class PrecioAlmacenUpdateOneRequiredWithoutProductoInput {
  @TypeGraphQL.Field(_type => PrecioAlmacenCreateWithoutProductoInput, {
    nullable: true
  })
  create?: PrecioAlmacenCreateWithoutProductoInput | undefined;

  @TypeGraphQL.Field(_type => PrecioAlmacenCreateOrConnectWithoutProductoInput, {
    nullable: true
  })
  connectOrCreate?: PrecioAlmacenCreateOrConnectWithoutProductoInput | undefined;

  @TypeGraphQL.Field(_type => PrecioAlmacenUpsertWithoutProductoInput, {
    nullable: true
  })
  upsert?: PrecioAlmacenUpsertWithoutProductoInput | undefined;

  @TypeGraphQL.Field(_type => PrecioAlmacenWhereUniqueInput, {
    nullable: true
  })
  connect?: PrecioAlmacenWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => PrecioAlmacenUpdateWithoutProductoInput, {
    nullable: true
  })
  update?: PrecioAlmacenUpdateWithoutProductoInput | undefined;
}

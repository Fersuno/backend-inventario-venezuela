import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ProductoCreateManyPrecioVentaInputEnvelope } from "../inputs/ProductoCreateManyPrecioVentaInputEnvelope";
import { ProductoCreateOrConnectWithoutPrecioVentaInput } from "../inputs/ProductoCreateOrConnectWithoutPrecioVentaInput";
import { ProductoCreateWithoutPrecioVentaInput } from "../inputs/ProductoCreateWithoutPrecioVentaInput";
import { ProductoScalarWhereInput } from "../inputs/ProductoScalarWhereInput";
import { ProductoUpdateManyWithWhereWithoutPrecioVentaInput } from "../inputs/ProductoUpdateManyWithWhereWithoutPrecioVentaInput";
import { ProductoUpdateWithWhereUniqueWithoutPrecioVentaInput } from "../inputs/ProductoUpdateWithWhereUniqueWithoutPrecioVentaInput";
import { ProductoUpsertWithWhereUniqueWithoutPrecioVentaInput } from "../inputs/ProductoUpsertWithWhereUniqueWithoutPrecioVentaInput";
import { ProductoWhereUniqueInput } from "../inputs/ProductoWhereUniqueInput";

@TypeGraphQL.InputType("ProductoUpdateManyWithoutPrecioVentaInput", {
  isAbstract: true
})
export class ProductoUpdateManyWithoutPrecioVentaInput {
  @TypeGraphQL.Field(_type => [ProductoCreateWithoutPrecioVentaInput], {
    nullable: true
  })
  create?: ProductoCreateWithoutPrecioVentaInput[] | undefined;

  @TypeGraphQL.Field(_type => [ProductoCreateOrConnectWithoutPrecioVentaInput], {
    nullable: true
  })
  connectOrCreate?: ProductoCreateOrConnectWithoutPrecioVentaInput[] | undefined;

  @TypeGraphQL.Field(_type => [ProductoUpsertWithWhereUniqueWithoutPrecioVentaInput], {
    nullable: true
  })
  upsert?: ProductoUpsertWithWhereUniqueWithoutPrecioVentaInput[] | undefined;

  @TypeGraphQL.Field(_type => ProductoCreateManyPrecioVentaInputEnvelope, {
    nullable: true
  })
  createMany?: ProductoCreateManyPrecioVentaInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [ProductoWhereUniqueInput], {
    nullable: true
  })
  set?: ProductoWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [ProductoWhereUniqueInput], {
    nullable: true
  })
  disconnect?: ProductoWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [ProductoWhereUniqueInput], {
    nullable: true
  })
  delete?: ProductoWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [ProductoWhereUniqueInput], {
    nullable: true
  })
  connect?: ProductoWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [ProductoUpdateWithWhereUniqueWithoutPrecioVentaInput], {
    nullable: true
  })
  update?: ProductoUpdateWithWhereUniqueWithoutPrecioVentaInput[] | undefined;

  @TypeGraphQL.Field(_type => [ProductoUpdateManyWithWhereWithoutPrecioVentaInput], {
    nullable: true
  })
  updateMany?: ProductoUpdateManyWithWhereWithoutPrecioVentaInput[] | undefined;

  @TypeGraphQL.Field(_type => [ProductoScalarWhereInput], {
    nullable: true
  })
  deleteMany?: ProductoScalarWhereInput[] | undefined;
}

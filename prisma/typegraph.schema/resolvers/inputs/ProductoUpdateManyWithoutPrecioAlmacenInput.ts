import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ProductoCreateManyPrecioAlmacenInputEnvelope } from "../inputs/ProductoCreateManyPrecioAlmacenInputEnvelope";
import { ProductoCreateOrConnectWithoutPrecioAlmacenInput } from "../inputs/ProductoCreateOrConnectWithoutPrecioAlmacenInput";
import { ProductoCreateWithoutPrecioAlmacenInput } from "../inputs/ProductoCreateWithoutPrecioAlmacenInput";
import { ProductoScalarWhereInput } from "../inputs/ProductoScalarWhereInput";
import { ProductoUpdateManyWithWhereWithoutPrecioAlmacenInput } from "../inputs/ProductoUpdateManyWithWhereWithoutPrecioAlmacenInput";
import { ProductoUpdateWithWhereUniqueWithoutPrecioAlmacenInput } from "../inputs/ProductoUpdateWithWhereUniqueWithoutPrecioAlmacenInput";
import { ProductoUpsertWithWhereUniqueWithoutPrecioAlmacenInput } from "../inputs/ProductoUpsertWithWhereUniqueWithoutPrecioAlmacenInput";
import { ProductoWhereUniqueInput } from "../inputs/ProductoWhereUniqueInput";

@TypeGraphQL.InputType("ProductoUpdateManyWithoutPrecioAlmacenInput", {
  isAbstract: true
})
export class ProductoUpdateManyWithoutPrecioAlmacenInput {
  @TypeGraphQL.Field(_type => [ProductoCreateWithoutPrecioAlmacenInput], {
    nullable: true
  })
  create?: ProductoCreateWithoutPrecioAlmacenInput[] | undefined;

  @TypeGraphQL.Field(_type => [ProductoCreateOrConnectWithoutPrecioAlmacenInput], {
    nullable: true
  })
  connectOrCreate?: ProductoCreateOrConnectWithoutPrecioAlmacenInput[] | undefined;

  @TypeGraphQL.Field(_type => [ProductoUpsertWithWhereUniqueWithoutPrecioAlmacenInput], {
    nullable: true
  })
  upsert?: ProductoUpsertWithWhereUniqueWithoutPrecioAlmacenInput[] | undefined;

  @TypeGraphQL.Field(_type => ProductoCreateManyPrecioAlmacenInputEnvelope, {
    nullable: true
  })
  createMany?: ProductoCreateManyPrecioAlmacenInputEnvelope | undefined;

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

  @TypeGraphQL.Field(_type => [ProductoUpdateWithWhereUniqueWithoutPrecioAlmacenInput], {
    nullable: true
  })
  update?: ProductoUpdateWithWhereUniqueWithoutPrecioAlmacenInput[] | undefined;

  @TypeGraphQL.Field(_type => [ProductoUpdateManyWithWhereWithoutPrecioAlmacenInput], {
    nullable: true
  })
  updateMany?: ProductoUpdateManyWithWhereWithoutPrecioAlmacenInput[] | undefined;

  @TypeGraphQL.Field(_type => [ProductoScalarWhereInput], {
    nullable: true
  })
  deleteMany?: ProductoScalarWhereInput[] | undefined;
}

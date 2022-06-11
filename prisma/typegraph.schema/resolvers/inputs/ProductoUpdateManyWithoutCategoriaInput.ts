import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ProductoCreateManyCategoriaInputEnvelope } from "../inputs/ProductoCreateManyCategoriaInputEnvelope";
import { ProductoCreateOrConnectWithoutCategoriaInput } from "../inputs/ProductoCreateOrConnectWithoutCategoriaInput";
import { ProductoCreateWithoutCategoriaInput } from "../inputs/ProductoCreateWithoutCategoriaInput";
import { ProductoScalarWhereInput } from "../inputs/ProductoScalarWhereInput";
import { ProductoUpdateManyWithWhereWithoutCategoriaInput } from "../inputs/ProductoUpdateManyWithWhereWithoutCategoriaInput";
import { ProductoUpdateWithWhereUniqueWithoutCategoriaInput } from "../inputs/ProductoUpdateWithWhereUniqueWithoutCategoriaInput";
import { ProductoUpsertWithWhereUniqueWithoutCategoriaInput } from "../inputs/ProductoUpsertWithWhereUniqueWithoutCategoriaInput";
import { ProductoWhereUniqueInput } from "../inputs/ProductoWhereUniqueInput";

@TypeGraphQL.InputType("ProductoUpdateManyWithoutCategoriaInput", {
  isAbstract: true
})
export class ProductoUpdateManyWithoutCategoriaInput {
  @TypeGraphQL.Field(_type => [ProductoCreateWithoutCategoriaInput], {
    nullable: true
  })
  create?: ProductoCreateWithoutCategoriaInput[] | undefined;

  @TypeGraphQL.Field(_type => [ProductoCreateOrConnectWithoutCategoriaInput], {
    nullable: true
  })
  connectOrCreate?: ProductoCreateOrConnectWithoutCategoriaInput[] | undefined;

  @TypeGraphQL.Field(_type => [ProductoUpsertWithWhereUniqueWithoutCategoriaInput], {
    nullable: true
  })
  upsert?: ProductoUpsertWithWhereUniqueWithoutCategoriaInput[] | undefined;

  @TypeGraphQL.Field(_type => ProductoCreateManyCategoriaInputEnvelope, {
    nullable: true
  })
  createMany?: ProductoCreateManyCategoriaInputEnvelope | undefined;

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

  @TypeGraphQL.Field(_type => [ProductoUpdateWithWhereUniqueWithoutCategoriaInput], {
    nullable: true
  })
  update?: ProductoUpdateWithWhereUniqueWithoutCategoriaInput[] | undefined;

  @TypeGraphQL.Field(_type => [ProductoUpdateManyWithWhereWithoutCategoriaInput], {
    nullable: true
  })
  updateMany?: ProductoUpdateManyWithWhereWithoutCategoriaInput[] | undefined;

  @TypeGraphQL.Field(_type => [ProductoScalarWhereInput], {
    nullable: true
  })
  deleteMany?: ProductoScalarWhereInput[] | undefined;
}

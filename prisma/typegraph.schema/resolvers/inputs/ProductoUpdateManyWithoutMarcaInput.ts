import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ProductoCreateManyMarcaInputEnvelope } from "../inputs/ProductoCreateManyMarcaInputEnvelope";
import { ProductoCreateOrConnectWithoutMarcaInput } from "../inputs/ProductoCreateOrConnectWithoutMarcaInput";
import { ProductoCreateWithoutMarcaInput } from "../inputs/ProductoCreateWithoutMarcaInput";
import { ProductoScalarWhereInput } from "../inputs/ProductoScalarWhereInput";
import { ProductoUpdateManyWithWhereWithoutMarcaInput } from "../inputs/ProductoUpdateManyWithWhereWithoutMarcaInput";
import { ProductoUpdateWithWhereUniqueWithoutMarcaInput } from "../inputs/ProductoUpdateWithWhereUniqueWithoutMarcaInput";
import { ProductoUpsertWithWhereUniqueWithoutMarcaInput } from "../inputs/ProductoUpsertWithWhereUniqueWithoutMarcaInput";
import { ProductoWhereUniqueInput } from "../inputs/ProductoWhereUniqueInput";

@TypeGraphQL.InputType("ProductoUpdateManyWithoutMarcaInput", {
  isAbstract: true
})
export class ProductoUpdateManyWithoutMarcaInput {
  @TypeGraphQL.Field(_type => [ProductoCreateWithoutMarcaInput], {
    nullable: true
  })
  create?: ProductoCreateWithoutMarcaInput[] | undefined;

  @TypeGraphQL.Field(_type => [ProductoCreateOrConnectWithoutMarcaInput], {
    nullable: true
  })
  connectOrCreate?: ProductoCreateOrConnectWithoutMarcaInput[] | undefined;

  @TypeGraphQL.Field(_type => [ProductoUpsertWithWhereUniqueWithoutMarcaInput], {
    nullable: true
  })
  upsert?: ProductoUpsertWithWhereUniqueWithoutMarcaInput[] | undefined;

  @TypeGraphQL.Field(_type => ProductoCreateManyMarcaInputEnvelope, {
    nullable: true
  })
  createMany?: ProductoCreateManyMarcaInputEnvelope | undefined;

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

  @TypeGraphQL.Field(_type => [ProductoUpdateWithWhereUniqueWithoutMarcaInput], {
    nullable: true
  })
  update?: ProductoUpdateWithWhereUniqueWithoutMarcaInput[] | undefined;

  @TypeGraphQL.Field(_type => [ProductoUpdateManyWithWhereWithoutMarcaInput], {
    nullable: true
  })
  updateMany?: ProductoUpdateManyWithWhereWithoutMarcaInput[] | undefined;

  @TypeGraphQL.Field(_type => [ProductoScalarWhereInput], {
    nullable: true
  })
  deleteMany?: ProductoScalarWhereInput[] | undefined;
}

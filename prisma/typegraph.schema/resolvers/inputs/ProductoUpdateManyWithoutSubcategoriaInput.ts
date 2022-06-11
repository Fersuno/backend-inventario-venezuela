import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ProductoCreateManySubcategoriaInputEnvelope } from "../inputs/ProductoCreateManySubcategoriaInputEnvelope";
import { ProductoCreateOrConnectWithoutSubcategoriaInput } from "../inputs/ProductoCreateOrConnectWithoutSubcategoriaInput";
import { ProductoCreateWithoutSubcategoriaInput } from "../inputs/ProductoCreateWithoutSubcategoriaInput";
import { ProductoScalarWhereInput } from "../inputs/ProductoScalarWhereInput";
import { ProductoUpdateManyWithWhereWithoutSubcategoriaInput } from "../inputs/ProductoUpdateManyWithWhereWithoutSubcategoriaInput";
import { ProductoUpdateWithWhereUniqueWithoutSubcategoriaInput } from "../inputs/ProductoUpdateWithWhereUniqueWithoutSubcategoriaInput";
import { ProductoUpsertWithWhereUniqueWithoutSubcategoriaInput } from "../inputs/ProductoUpsertWithWhereUniqueWithoutSubcategoriaInput";
import { ProductoWhereUniqueInput } from "../inputs/ProductoWhereUniqueInput";

@TypeGraphQL.InputType("ProductoUpdateManyWithoutSubcategoriaInput", {
  isAbstract: true
})
export class ProductoUpdateManyWithoutSubcategoriaInput {
  @TypeGraphQL.Field(_type => [ProductoCreateWithoutSubcategoriaInput], {
    nullable: true
  })
  create?: ProductoCreateWithoutSubcategoriaInput[] | undefined;

  @TypeGraphQL.Field(_type => [ProductoCreateOrConnectWithoutSubcategoriaInput], {
    nullable: true
  })
  connectOrCreate?: ProductoCreateOrConnectWithoutSubcategoriaInput[] | undefined;

  @TypeGraphQL.Field(_type => [ProductoUpsertWithWhereUniqueWithoutSubcategoriaInput], {
    nullable: true
  })
  upsert?: ProductoUpsertWithWhereUniqueWithoutSubcategoriaInput[] | undefined;

  @TypeGraphQL.Field(_type => ProductoCreateManySubcategoriaInputEnvelope, {
    nullable: true
  })
  createMany?: ProductoCreateManySubcategoriaInputEnvelope | undefined;

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

  @TypeGraphQL.Field(_type => [ProductoUpdateWithWhereUniqueWithoutSubcategoriaInput], {
    nullable: true
  })
  update?: ProductoUpdateWithWhereUniqueWithoutSubcategoriaInput[] | undefined;

  @TypeGraphQL.Field(_type => [ProductoUpdateManyWithWhereWithoutSubcategoriaInput], {
    nullable: true
  })
  updateMany?: ProductoUpdateManyWithWhereWithoutSubcategoriaInput[] | undefined;

  @TypeGraphQL.Field(_type => [ProductoScalarWhereInput], {
    nullable: true
  })
  deleteMany?: ProductoScalarWhereInput[] | undefined;
}

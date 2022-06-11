import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ProductoCreateManyOrigenInputEnvelope } from "../inputs/ProductoCreateManyOrigenInputEnvelope";
import { ProductoCreateOrConnectWithoutOrigenInput } from "../inputs/ProductoCreateOrConnectWithoutOrigenInput";
import { ProductoCreateWithoutOrigenInput } from "../inputs/ProductoCreateWithoutOrigenInput";
import { ProductoScalarWhereInput } from "../inputs/ProductoScalarWhereInput";
import { ProductoUpdateManyWithWhereWithoutOrigenInput } from "../inputs/ProductoUpdateManyWithWhereWithoutOrigenInput";
import { ProductoUpdateWithWhereUniqueWithoutOrigenInput } from "../inputs/ProductoUpdateWithWhereUniqueWithoutOrigenInput";
import { ProductoUpsertWithWhereUniqueWithoutOrigenInput } from "../inputs/ProductoUpsertWithWhereUniqueWithoutOrigenInput";
import { ProductoWhereUniqueInput } from "../inputs/ProductoWhereUniqueInput";

@TypeGraphQL.InputType("ProductoUpdateManyWithoutOrigenInput", {
  isAbstract: true
})
export class ProductoUpdateManyWithoutOrigenInput {
  @TypeGraphQL.Field(_type => [ProductoCreateWithoutOrigenInput], {
    nullable: true
  })
  create?: ProductoCreateWithoutOrigenInput[] | undefined;

  @TypeGraphQL.Field(_type => [ProductoCreateOrConnectWithoutOrigenInput], {
    nullable: true
  })
  connectOrCreate?: ProductoCreateOrConnectWithoutOrigenInput[] | undefined;

  @TypeGraphQL.Field(_type => [ProductoUpsertWithWhereUniqueWithoutOrigenInput], {
    nullable: true
  })
  upsert?: ProductoUpsertWithWhereUniqueWithoutOrigenInput[] | undefined;

  @TypeGraphQL.Field(_type => ProductoCreateManyOrigenInputEnvelope, {
    nullable: true
  })
  createMany?: ProductoCreateManyOrigenInputEnvelope | undefined;

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

  @TypeGraphQL.Field(_type => [ProductoUpdateWithWhereUniqueWithoutOrigenInput], {
    nullable: true
  })
  update?: ProductoUpdateWithWhereUniqueWithoutOrigenInput[] | undefined;

  @TypeGraphQL.Field(_type => [ProductoUpdateManyWithWhereWithoutOrigenInput], {
    nullable: true
  })
  updateMany?: ProductoUpdateManyWithWhereWithoutOrigenInput[] | undefined;

  @TypeGraphQL.Field(_type => [ProductoScalarWhereInput], {
    nullable: true
  })
  deleteMany?: ProductoScalarWhereInput[] | undefined;
}

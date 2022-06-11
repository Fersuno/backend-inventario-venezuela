import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { CantidadCreateManyProductoInputEnvelope } from "../inputs/CantidadCreateManyProductoInputEnvelope";
import { CantidadCreateOrConnectWithoutProductoInput } from "../inputs/CantidadCreateOrConnectWithoutProductoInput";
import { CantidadCreateWithoutProductoInput } from "../inputs/CantidadCreateWithoutProductoInput";
import { CantidadScalarWhereInput } from "../inputs/CantidadScalarWhereInput";
import { CantidadUpdateManyWithWhereWithoutProductoInput } from "../inputs/CantidadUpdateManyWithWhereWithoutProductoInput";
import { CantidadUpdateWithWhereUniqueWithoutProductoInput } from "../inputs/CantidadUpdateWithWhereUniqueWithoutProductoInput";
import { CantidadUpsertWithWhereUniqueWithoutProductoInput } from "../inputs/CantidadUpsertWithWhereUniqueWithoutProductoInput";
import { CantidadWhereUniqueInput } from "../inputs/CantidadWhereUniqueInput";

@TypeGraphQL.InputType("CantidadUpdateManyWithoutProductoInput", {
  isAbstract: true
})
export class CantidadUpdateManyWithoutProductoInput {
  @TypeGraphQL.Field(_type => [CantidadCreateWithoutProductoInput], {
    nullable: true
  })
  create?: CantidadCreateWithoutProductoInput[] | undefined;

  @TypeGraphQL.Field(_type => [CantidadCreateOrConnectWithoutProductoInput], {
    nullable: true
  })
  connectOrCreate?: CantidadCreateOrConnectWithoutProductoInput[] | undefined;

  @TypeGraphQL.Field(_type => [CantidadUpsertWithWhereUniqueWithoutProductoInput], {
    nullable: true
  })
  upsert?: CantidadUpsertWithWhereUniqueWithoutProductoInput[] | undefined;

  @TypeGraphQL.Field(_type => CantidadCreateManyProductoInputEnvelope, {
    nullable: true
  })
  createMany?: CantidadCreateManyProductoInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [CantidadWhereUniqueInput], {
    nullable: true
  })
  set?: CantidadWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [CantidadWhereUniqueInput], {
    nullable: true
  })
  disconnect?: CantidadWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [CantidadWhereUniqueInput], {
    nullable: true
  })
  delete?: CantidadWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [CantidadWhereUniqueInput], {
    nullable: true
  })
  connect?: CantidadWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [CantidadUpdateWithWhereUniqueWithoutProductoInput], {
    nullable: true
  })
  update?: CantidadUpdateWithWhereUniqueWithoutProductoInput[] | undefined;

  @TypeGraphQL.Field(_type => [CantidadUpdateManyWithWhereWithoutProductoInput], {
    nullable: true
  })
  updateMany?: CantidadUpdateManyWithWhereWithoutProductoInput[] | undefined;

  @TypeGraphQL.Field(_type => [CantidadScalarWhereInput], {
    nullable: true
  })
  deleteMany?: CantidadScalarWhereInput[] | undefined;
}

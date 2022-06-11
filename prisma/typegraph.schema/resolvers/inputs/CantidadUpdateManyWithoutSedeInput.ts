import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { CantidadCreateManySedeInputEnvelope } from "../inputs/CantidadCreateManySedeInputEnvelope";
import { CantidadCreateOrConnectWithoutSedeInput } from "../inputs/CantidadCreateOrConnectWithoutSedeInput";
import { CantidadCreateWithoutSedeInput } from "../inputs/CantidadCreateWithoutSedeInput";
import { CantidadScalarWhereInput } from "../inputs/CantidadScalarWhereInput";
import { CantidadUpdateManyWithWhereWithoutSedeInput } from "../inputs/CantidadUpdateManyWithWhereWithoutSedeInput";
import { CantidadUpdateWithWhereUniqueWithoutSedeInput } from "../inputs/CantidadUpdateWithWhereUniqueWithoutSedeInput";
import { CantidadUpsertWithWhereUniqueWithoutSedeInput } from "../inputs/CantidadUpsertWithWhereUniqueWithoutSedeInput";
import { CantidadWhereUniqueInput } from "../inputs/CantidadWhereUniqueInput";

@TypeGraphQL.InputType("CantidadUpdateManyWithoutSedeInput", {
  isAbstract: true
})
export class CantidadUpdateManyWithoutSedeInput {
  @TypeGraphQL.Field(_type => [CantidadCreateWithoutSedeInput], {
    nullable: true
  })
  create?: CantidadCreateWithoutSedeInput[] | undefined;

  @TypeGraphQL.Field(_type => [CantidadCreateOrConnectWithoutSedeInput], {
    nullable: true
  })
  connectOrCreate?: CantidadCreateOrConnectWithoutSedeInput[] | undefined;

  @TypeGraphQL.Field(_type => [CantidadUpsertWithWhereUniqueWithoutSedeInput], {
    nullable: true
  })
  upsert?: CantidadUpsertWithWhereUniqueWithoutSedeInput[] | undefined;

  @TypeGraphQL.Field(_type => CantidadCreateManySedeInputEnvelope, {
    nullable: true
  })
  createMany?: CantidadCreateManySedeInputEnvelope | undefined;

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

  @TypeGraphQL.Field(_type => [CantidadUpdateWithWhereUniqueWithoutSedeInput], {
    nullable: true
  })
  update?: CantidadUpdateWithWhereUniqueWithoutSedeInput[] | undefined;

  @TypeGraphQL.Field(_type => [CantidadUpdateManyWithWhereWithoutSedeInput], {
    nullable: true
  })
  updateMany?: CantidadUpdateManyWithWhereWithoutSedeInput[] | undefined;

  @TypeGraphQL.Field(_type => [CantidadScalarWhereInput], {
    nullable: true
  })
  deleteMany?: CantidadScalarWhereInput[] | undefined;
}

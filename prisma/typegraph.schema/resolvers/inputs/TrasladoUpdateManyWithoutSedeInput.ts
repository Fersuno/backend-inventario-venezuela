import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { TrasladoCreateManySedeInputEnvelope } from "../inputs/TrasladoCreateManySedeInputEnvelope";
import { TrasladoCreateOrConnectWithoutSedeInput } from "../inputs/TrasladoCreateOrConnectWithoutSedeInput";
import { TrasladoCreateWithoutSedeInput } from "../inputs/TrasladoCreateWithoutSedeInput";
import { TrasladoScalarWhereInput } from "../inputs/TrasladoScalarWhereInput";
import { TrasladoUpdateManyWithWhereWithoutSedeInput } from "../inputs/TrasladoUpdateManyWithWhereWithoutSedeInput";
import { TrasladoUpdateWithWhereUniqueWithoutSedeInput } from "../inputs/TrasladoUpdateWithWhereUniqueWithoutSedeInput";
import { TrasladoUpsertWithWhereUniqueWithoutSedeInput } from "../inputs/TrasladoUpsertWithWhereUniqueWithoutSedeInput";
import { TrasladoWhereUniqueInput } from "../inputs/TrasladoWhereUniqueInput";

@TypeGraphQL.InputType("TrasladoUpdateManyWithoutSedeInput", {
  isAbstract: true
})
export class TrasladoUpdateManyWithoutSedeInput {
  @TypeGraphQL.Field(_type => [TrasladoCreateWithoutSedeInput], {
    nullable: true
  })
  create?: TrasladoCreateWithoutSedeInput[] | undefined;

  @TypeGraphQL.Field(_type => [TrasladoCreateOrConnectWithoutSedeInput], {
    nullable: true
  })
  connectOrCreate?: TrasladoCreateOrConnectWithoutSedeInput[] | undefined;

  @TypeGraphQL.Field(_type => [TrasladoUpsertWithWhereUniqueWithoutSedeInput], {
    nullable: true
  })
  upsert?: TrasladoUpsertWithWhereUniqueWithoutSedeInput[] | undefined;

  @TypeGraphQL.Field(_type => TrasladoCreateManySedeInputEnvelope, {
    nullable: true
  })
  createMany?: TrasladoCreateManySedeInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [TrasladoWhereUniqueInput], {
    nullable: true
  })
  set?: TrasladoWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [TrasladoWhereUniqueInput], {
    nullable: true
  })
  disconnect?: TrasladoWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [TrasladoWhereUniqueInput], {
    nullable: true
  })
  delete?: TrasladoWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [TrasladoWhereUniqueInput], {
    nullable: true
  })
  connect?: TrasladoWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [TrasladoUpdateWithWhereUniqueWithoutSedeInput], {
    nullable: true
  })
  update?: TrasladoUpdateWithWhereUniqueWithoutSedeInput[] | undefined;

  @TypeGraphQL.Field(_type => [TrasladoUpdateManyWithWhereWithoutSedeInput], {
    nullable: true
  })
  updateMany?: TrasladoUpdateManyWithWhereWithoutSedeInput[] | undefined;

  @TypeGraphQL.Field(_type => [TrasladoScalarWhereInput], {
    nullable: true
  })
  deleteMany?: TrasladoScalarWhereInput[] | undefined;
}

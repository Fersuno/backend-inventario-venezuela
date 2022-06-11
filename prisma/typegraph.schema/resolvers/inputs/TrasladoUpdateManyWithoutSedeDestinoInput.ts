import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { TrasladoCreateManySedeDestinoInputEnvelope } from "../inputs/TrasladoCreateManySedeDestinoInputEnvelope";
import { TrasladoCreateOrConnectWithoutSedeDestinoInput } from "../inputs/TrasladoCreateOrConnectWithoutSedeDestinoInput";
import { TrasladoCreateWithoutSedeDestinoInput } from "../inputs/TrasladoCreateWithoutSedeDestinoInput";
import { TrasladoScalarWhereInput } from "../inputs/TrasladoScalarWhereInput";
import { TrasladoUpdateManyWithWhereWithoutSedeDestinoInput } from "../inputs/TrasladoUpdateManyWithWhereWithoutSedeDestinoInput";
import { TrasladoUpdateWithWhereUniqueWithoutSedeDestinoInput } from "../inputs/TrasladoUpdateWithWhereUniqueWithoutSedeDestinoInput";
import { TrasladoUpsertWithWhereUniqueWithoutSedeDestinoInput } from "../inputs/TrasladoUpsertWithWhereUniqueWithoutSedeDestinoInput";
import { TrasladoWhereUniqueInput } from "../inputs/TrasladoWhereUniqueInput";

@TypeGraphQL.InputType("TrasladoUpdateManyWithoutSedeDestinoInput", {
  isAbstract: true
})
export class TrasladoUpdateManyWithoutSedeDestinoInput {
  @TypeGraphQL.Field(_type => [TrasladoCreateWithoutSedeDestinoInput], {
    nullable: true
  })
  create?: TrasladoCreateWithoutSedeDestinoInput[] | undefined;

  @TypeGraphQL.Field(_type => [TrasladoCreateOrConnectWithoutSedeDestinoInput], {
    nullable: true
  })
  connectOrCreate?: TrasladoCreateOrConnectWithoutSedeDestinoInput[] | undefined;

  @TypeGraphQL.Field(_type => [TrasladoUpsertWithWhereUniqueWithoutSedeDestinoInput], {
    nullable: true
  })
  upsert?: TrasladoUpsertWithWhereUniqueWithoutSedeDestinoInput[] | undefined;

  @TypeGraphQL.Field(_type => TrasladoCreateManySedeDestinoInputEnvelope, {
    nullable: true
  })
  createMany?: TrasladoCreateManySedeDestinoInputEnvelope | undefined;

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

  @TypeGraphQL.Field(_type => [TrasladoUpdateWithWhereUniqueWithoutSedeDestinoInput], {
    nullable: true
  })
  update?: TrasladoUpdateWithWhereUniqueWithoutSedeDestinoInput[] | undefined;

  @TypeGraphQL.Field(_type => [TrasladoUpdateManyWithWhereWithoutSedeDestinoInput], {
    nullable: true
  })
  updateMany?: TrasladoUpdateManyWithWhereWithoutSedeDestinoInput[] | undefined;

  @TypeGraphQL.Field(_type => [TrasladoScalarWhereInput], {
    nullable: true
  })
  deleteMany?: TrasladoScalarWhereInput[] | undefined;
}

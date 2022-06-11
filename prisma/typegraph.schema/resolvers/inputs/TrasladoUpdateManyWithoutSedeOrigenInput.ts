import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { TrasladoCreateManySedeOrigenInputEnvelope } from "../inputs/TrasladoCreateManySedeOrigenInputEnvelope";
import { TrasladoCreateOrConnectWithoutSedeOrigenInput } from "../inputs/TrasladoCreateOrConnectWithoutSedeOrigenInput";
import { TrasladoCreateWithoutSedeOrigenInput } from "../inputs/TrasladoCreateWithoutSedeOrigenInput";
import { TrasladoScalarWhereInput } from "../inputs/TrasladoScalarWhereInput";
import { TrasladoUpdateManyWithWhereWithoutSedeOrigenInput } from "../inputs/TrasladoUpdateManyWithWhereWithoutSedeOrigenInput";
import { TrasladoUpdateWithWhereUniqueWithoutSedeOrigenInput } from "../inputs/TrasladoUpdateWithWhereUniqueWithoutSedeOrigenInput";
import { TrasladoUpsertWithWhereUniqueWithoutSedeOrigenInput } from "../inputs/TrasladoUpsertWithWhereUniqueWithoutSedeOrigenInput";
import { TrasladoWhereUniqueInput } from "../inputs/TrasladoWhereUniqueInput";

@TypeGraphQL.InputType("TrasladoUpdateManyWithoutSedeOrigenInput", {
  isAbstract: true
})
export class TrasladoUpdateManyWithoutSedeOrigenInput {
  @TypeGraphQL.Field(_type => [TrasladoCreateWithoutSedeOrigenInput], {
    nullable: true
  })
  create?: TrasladoCreateWithoutSedeOrigenInput[] | undefined;

  @TypeGraphQL.Field(_type => [TrasladoCreateOrConnectWithoutSedeOrigenInput], {
    nullable: true
  })
  connectOrCreate?: TrasladoCreateOrConnectWithoutSedeOrigenInput[] | undefined;

  @TypeGraphQL.Field(_type => [TrasladoUpsertWithWhereUniqueWithoutSedeOrigenInput], {
    nullable: true
  })
  upsert?: TrasladoUpsertWithWhereUniqueWithoutSedeOrigenInput[] | undefined;

  @TypeGraphQL.Field(_type => TrasladoCreateManySedeOrigenInputEnvelope, {
    nullable: true
  })
  createMany?: TrasladoCreateManySedeOrigenInputEnvelope | undefined;

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

  @TypeGraphQL.Field(_type => [TrasladoUpdateWithWhereUniqueWithoutSedeOrigenInput], {
    nullable: true
  })
  update?: TrasladoUpdateWithWhereUniqueWithoutSedeOrigenInput[] | undefined;

  @TypeGraphQL.Field(_type => [TrasladoUpdateManyWithWhereWithoutSedeOrigenInput], {
    nullable: true
  })
  updateMany?: TrasladoUpdateManyWithWhereWithoutSedeOrigenInput[] | undefined;

  @TypeGraphQL.Field(_type => [TrasladoScalarWhereInput], {
    nullable: true
  })
  deleteMany?: TrasladoScalarWhereInput[] | undefined;
}

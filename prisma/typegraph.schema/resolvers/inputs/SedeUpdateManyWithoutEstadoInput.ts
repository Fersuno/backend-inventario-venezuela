import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { SedeCreateManyEstadoInputEnvelope } from "../inputs/SedeCreateManyEstadoInputEnvelope";
import { SedeCreateOrConnectWithoutEstadoInput } from "../inputs/SedeCreateOrConnectWithoutEstadoInput";
import { SedeCreateWithoutEstadoInput } from "../inputs/SedeCreateWithoutEstadoInput";
import { SedeScalarWhereInput } from "../inputs/SedeScalarWhereInput";
import { SedeUpdateManyWithWhereWithoutEstadoInput } from "../inputs/SedeUpdateManyWithWhereWithoutEstadoInput";
import { SedeUpdateWithWhereUniqueWithoutEstadoInput } from "../inputs/SedeUpdateWithWhereUniqueWithoutEstadoInput";
import { SedeUpsertWithWhereUniqueWithoutEstadoInput } from "../inputs/SedeUpsertWithWhereUniqueWithoutEstadoInput";
import { SedeWhereUniqueInput } from "../inputs/SedeWhereUniqueInput";

@TypeGraphQL.InputType("SedeUpdateManyWithoutEstadoInput", {
  isAbstract: true
})
export class SedeUpdateManyWithoutEstadoInput {
  @TypeGraphQL.Field(_type => [SedeCreateWithoutEstadoInput], {
    nullable: true
  })
  create?: SedeCreateWithoutEstadoInput[] | undefined;

  @TypeGraphQL.Field(_type => [SedeCreateOrConnectWithoutEstadoInput], {
    nullable: true
  })
  connectOrCreate?: SedeCreateOrConnectWithoutEstadoInput[] | undefined;

  @TypeGraphQL.Field(_type => [SedeUpsertWithWhereUniqueWithoutEstadoInput], {
    nullable: true
  })
  upsert?: SedeUpsertWithWhereUniqueWithoutEstadoInput[] | undefined;

  @TypeGraphQL.Field(_type => SedeCreateManyEstadoInputEnvelope, {
    nullable: true
  })
  createMany?: SedeCreateManyEstadoInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [SedeWhereUniqueInput], {
    nullable: true
  })
  set?: SedeWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [SedeWhereUniqueInput], {
    nullable: true
  })
  disconnect?: SedeWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [SedeWhereUniqueInput], {
    nullable: true
  })
  delete?: SedeWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [SedeWhereUniqueInput], {
    nullable: true
  })
  connect?: SedeWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [SedeUpdateWithWhereUniqueWithoutEstadoInput], {
    nullable: true
  })
  update?: SedeUpdateWithWhereUniqueWithoutEstadoInput[] | undefined;

  @TypeGraphQL.Field(_type => [SedeUpdateManyWithWhereWithoutEstadoInput], {
    nullable: true
  })
  updateMany?: SedeUpdateManyWithWhereWithoutEstadoInput[] | undefined;

  @TypeGraphQL.Field(_type => [SedeScalarWhereInput], {
    nullable: true
  })
  deleteMany?: SedeScalarWhereInput[] | undefined;
}

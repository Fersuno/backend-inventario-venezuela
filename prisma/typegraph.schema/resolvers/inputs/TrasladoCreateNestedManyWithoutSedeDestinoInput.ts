import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { TrasladoCreateManySedeDestinoInputEnvelope } from "../inputs/TrasladoCreateManySedeDestinoInputEnvelope";
import { TrasladoCreateOrConnectWithoutSedeDestinoInput } from "../inputs/TrasladoCreateOrConnectWithoutSedeDestinoInput";
import { TrasladoCreateWithoutSedeDestinoInput } from "../inputs/TrasladoCreateWithoutSedeDestinoInput";
import { TrasladoWhereUniqueInput } from "../inputs/TrasladoWhereUniqueInput";

@TypeGraphQL.InputType("TrasladoCreateNestedManyWithoutSedeDestinoInput", {
  isAbstract: true
})
export class TrasladoCreateNestedManyWithoutSedeDestinoInput {
  @TypeGraphQL.Field(_type => [TrasladoCreateWithoutSedeDestinoInput], {
    nullable: true
  })
  create?: TrasladoCreateWithoutSedeDestinoInput[] | undefined;

  @TypeGraphQL.Field(_type => [TrasladoCreateOrConnectWithoutSedeDestinoInput], {
    nullable: true
  })
  connectOrCreate?: TrasladoCreateOrConnectWithoutSedeDestinoInput[] | undefined;

  @TypeGraphQL.Field(_type => TrasladoCreateManySedeDestinoInputEnvelope, {
    nullable: true
  })
  createMany?: TrasladoCreateManySedeDestinoInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [TrasladoWhereUniqueInput], {
    nullable: true
  })
  connect?: TrasladoWhereUniqueInput[] | undefined;
}

import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { TrasladoCreateWithoutSedeDestinoInput } from "../inputs/TrasladoCreateWithoutSedeDestinoInput";
import { TrasladoUpdateWithoutSedeDestinoInput } from "../inputs/TrasladoUpdateWithoutSedeDestinoInput";
import { TrasladoWhereUniqueInput } from "../inputs/TrasladoWhereUniqueInput";

@TypeGraphQL.InputType("TrasladoUpsertWithWhereUniqueWithoutSedeDestinoInput", {
  isAbstract: true
})
export class TrasladoUpsertWithWhereUniqueWithoutSedeDestinoInput {
  @TypeGraphQL.Field(_type => TrasladoWhereUniqueInput, {
    nullable: false
  })
  where!: TrasladoWhereUniqueInput;

  @TypeGraphQL.Field(_type => TrasladoUpdateWithoutSedeDestinoInput, {
    nullable: false
  })
  update!: TrasladoUpdateWithoutSedeDestinoInput;

  @TypeGraphQL.Field(_type => TrasladoCreateWithoutSedeDestinoInput, {
    nullable: false
  })
  create!: TrasladoCreateWithoutSedeDestinoInput;
}

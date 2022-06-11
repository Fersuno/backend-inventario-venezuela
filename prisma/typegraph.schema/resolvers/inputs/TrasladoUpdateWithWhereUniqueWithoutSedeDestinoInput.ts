import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { TrasladoUpdateWithoutSedeDestinoInput } from "../inputs/TrasladoUpdateWithoutSedeDestinoInput";
import { TrasladoWhereUniqueInput } from "../inputs/TrasladoWhereUniqueInput";

@TypeGraphQL.InputType("TrasladoUpdateWithWhereUniqueWithoutSedeDestinoInput", {
  isAbstract: true
})
export class TrasladoUpdateWithWhereUniqueWithoutSedeDestinoInput {
  @TypeGraphQL.Field(_type => TrasladoWhereUniqueInput, {
    nullable: false
  })
  where!: TrasladoWhereUniqueInput;

  @TypeGraphQL.Field(_type => TrasladoUpdateWithoutSedeDestinoInput, {
    nullable: false
  })
  data!: TrasladoUpdateWithoutSedeDestinoInput;
}

import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { TrasladoCreateWithoutSedeInput } from "../inputs/TrasladoCreateWithoutSedeInput";
import { TrasladoUpdateWithoutSedeInput } from "../inputs/TrasladoUpdateWithoutSedeInput";
import { TrasladoWhereUniqueInput } from "../inputs/TrasladoWhereUniqueInput";

@TypeGraphQL.InputType("TrasladoUpsertWithWhereUniqueWithoutSedeInput", {
  isAbstract: true
})
export class TrasladoUpsertWithWhereUniqueWithoutSedeInput {
  @TypeGraphQL.Field(_type => TrasladoWhereUniqueInput, {
    nullable: false
  })
  where!: TrasladoWhereUniqueInput;

  @TypeGraphQL.Field(_type => TrasladoUpdateWithoutSedeInput, {
    nullable: false
  })
  update!: TrasladoUpdateWithoutSedeInput;

  @TypeGraphQL.Field(_type => TrasladoCreateWithoutSedeInput, {
    nullable: false
  })
  create!: TrasladoCreateWithoutSedeInput;
}

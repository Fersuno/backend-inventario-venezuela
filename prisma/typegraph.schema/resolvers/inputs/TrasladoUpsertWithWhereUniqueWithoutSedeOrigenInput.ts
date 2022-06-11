import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { TrasladoCreateWithoutSedeOrigenInput } from "../inputs/TrasladoCreateWithoutSedeOrigenInput";
import { TrasladoUpdateWithoutSedeOrigenInput } from "../inputs/TrasladoUpdateWithoutSedeOrigenInput";
import { TrasladoWhereUniqueInput } from "../inputs/TrasladoWhereUniqueInput";

@TypeGraphQL.InputType("TrasladoUpsertWithWhereUniqueWithoutSedeOrigenInput", {
  isAbstract: true
})
export class TrasladoUpsertWithWhereUniqueWithoutSedeOrigenInput {
  @TypeGraphQL.Field(_type => TrasladoWhereUniqueInput, {
    nullable: false
  })
  where!: TrasladoWhereUniqueInput;

  @TypeGraphQL.Field(_type => TrasladoUpdateWithoutSedeOrigenInput, {
    nullable: false
  })
  update!: TrasladoUpdateWithoutSedeOrigenInput;

  @TypeGraphQL.Field(_type => TrasladoCreateWithoutSedeOrigenInput, {
    nullable: false
  })
  create!: TrasladoCreateWithoutSedeOrigenInput;
}

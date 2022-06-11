import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { TrasladoUpdateWithoutSedeOrigenInput } from "../inputs/TrasladoUpdateWithoutSedeOrigenInput";
import { TrasladoWhereUniqueInput } from "../inputs/TrasladoWhereUniqueInput";

@TypeGraphQL.InputType("TrasladoUpdateWithWhereUniqueWithoutSedeOrigenInput", {
  isAbstract: true
})
export class TrasladoUpdateWithWhereUniqueWithoutSedeOrigenInput {
  @TypeGraphQL.Field(_type => TrasladoWhereUniqueInput, {
    nullable: false
  })
  where!: TrasladoWhereUniqueInput;

  @TypeGraphQL.Field(_type => TrasladoUpdateWithoutSedeOrigenInput, {
    nullable: false
  })
  data!: TrasladoUpdateWithoutSedeOrigenInput;
}

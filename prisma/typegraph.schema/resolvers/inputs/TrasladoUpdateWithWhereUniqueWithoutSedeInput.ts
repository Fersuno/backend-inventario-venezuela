import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { TrasladoUpdateWithoutSedeInput } from "../inputs/TrasladoUpdateWithoutSedeInput";
import { TrasladoWhereUniqueInput } from "../inputs/TrasladoWhereUniqueInput";

@TypeGraphQL.InputType("TrasladoUpdateWithWhereUniqueWithoutSedeInput", {
  isAbstract: true
})
export class TrasladoUpdateWithWhereUniqueWithoutSedeInput {
  @TypeGraphQL.Field(_type => TrasladoWhereUniqueInput, {
    nullable: false
  })
  where!: TrasladoWhereUniqueInput;

  @TypeGraphQL.Field(_type => TrasladoUpdateWithoutSedeInput, {
    nullable: false
  })
  data!: TrasladoUpdateWithoutSedeInput;
}

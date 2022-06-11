import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { CantidadUpdateWithoutSedeInput } from "../inputs/CantidadUpdateWithoutSedeInput";
import { CantidadWhereUniqueInput } from "../inputs/CantidadWhereUniqueInput";

@TypeGraphQL.InputType("CantidadUpdateWithWhereUniqueWithoutSedeInput", {
  isAbstract: true
})
export class CantidadUpdateWithWhereUniqueWithoutSedeInput {
  @TypeGraphQL.Field(_type => CantidadWhereUniqueInput, {
    nullable: false
  })
  where!: CantidadWhereUniqueInput;

  @TypeGraphQL.Field(_type => CantidadUpdateWithoutSedeInput, {
    nullable: false
  })
  data!: CantidadUpdateWithoutSedeInput;
}

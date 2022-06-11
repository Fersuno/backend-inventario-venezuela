import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { CantidadCreateWithoutSedeInput } from "../inputs/CantidadCreateWithoutSedeInput";
import { CantidadUpdateWithoutSedeInput } from "../inputs/CantidadUpdateWithoutSedeInput";
import { CantidadWhereUniqueInput } from "../inputs/CantidadWhereUniqueInput";

@TypeGraphQL.InputType("CantidadUpsertWithWhereUniqueWithoutSedeInput", {
  isAbstract: true
})
export class CantidadUpsertWithWhereUniqueWithoutSedeInput {
  @TypeGraphQL.Field(_type => CantidadWhereUniqueInput, {
    nullable: false
  })
  where!: CantidadWhereUniqueInput;

  @TypeGraphQL.Field(_type => CantidadUpdateWithoutSedeInput, {
    nullable: false
  })
  update!: CantidadUpdateWithoutSedeInput;

  @TypeGraphQL.Field(_type => CantidadCreateWithoutSedeInput, {
    nullable: false
  })
  create!: CantidadCreateWithoutSedeInput;
}

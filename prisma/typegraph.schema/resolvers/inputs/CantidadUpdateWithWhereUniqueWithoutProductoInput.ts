import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { CantidadUpdateWithoutProductoInput } from "../inputs/CantidadUpdateWithoutProductoInput";
import { CantidadWhereUniqueInput } from "../inputs/CantidadWhereUniqueInput";

@TypeGraphQL.InputType("CantidadUpdateWithWhereUniqueWithoutProductoInput", {
  isAbstract: true
})
export class CantidadUpdateWithWhereUniqueWithoutProductoInput {
  @TypeGraphQL.Field(_type => CantidadWhereUniqueInput, {
    nullable: false
  })
  where!: CantidadWhereUniqueInput;

  @TypeGraphQL.Field(_type => CantidadUpdateWithoutProductoInput, {
    nullable: false
  })
  data!: CantidadUpdateWithoutProductoInput;
}

import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { CantidadCreateWithoutProductoInput } from "../inputs/CantidadCreateWithoutProductoInput";
import { CantidadUpdateWithoutProductoInput } from "../inputs/CantidadUpdateWithoutProductoInput";
import { CantidadWhereUniqueInput } from "../inputs/CantidadWhereUniqueInput";

@TypeGraphQL.InputType("CantidadUpsertWithWhereUniqueWithoutProductoInput", {
  isAbstract: true
})
export class CantidadUpsertWithWhereUniqueWithoutProductoInput {
  @TypeGraphQL.Field(_type => CantidadWhereUniqueInput, {
    nullable: false
  })
  where!: CantidadWhereUniqueInput;

  @TypeGraphQL.Field(_type => CantidadUpdateWithoutProductoInput, {
    nullable: false
  })
  update!: CantidadUpdateWithoutProductoInput;

  @TypeGraphQL.Field(_type => CantidadCreateWithoutProductoInput, {
    nullable: false
  })
  create!: CantidadCreateWithoutProductoInput;
}

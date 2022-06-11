import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { OrigenCreateWithoutProductoInput } from "../inputs/OrigenCreateWithoutProductoInput";
import { OrigenUpdateWithoutProductoInput } from "../inputs/OrigenUpdateWithoutProductoInput";

@TypeGraphQL.InputType("OrigenUpsertWithoutProductoInput", {
  isAbstract: true
})
export class OrigenUpsertWithoutProductoInput {
  @TypeGraphQL.Field(_type => OrigenUpdateWithoutProductoInput, {
    nullable: false
  })
  update!: OrigenUpdateWithoutProductoInput;

  @TypeGraphQL.Field(_type => OrigenCreateWithoutProductoInput, {
    nullable: false
  })
  create!: OrigenCreateWithoutProductoInput;
}

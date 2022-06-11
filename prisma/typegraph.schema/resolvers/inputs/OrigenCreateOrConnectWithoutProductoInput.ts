import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { OrigenCreateWithoutProductoInput } from "../inputs/OrigenCreateWithoutProductoInput";
import { OrigenWhereUniqueInput } from "../inputs/OrigenWhereUniqueInput";

@TypeGraphQL.InputType("OrigenCreateOrConnectWithoutProductoInput", {
  isAbstract: true
})
export class OrigenCreateOrConnectWithoutProductoInput {
  @TypeGraphQL.Field(_type => OrigenWhereUniqueInput, {
    nullable: false
  })
  where!: OrigenWhereUniqueInput;

  @TypeGraphQL.Field(_type => OrigenCreateWithoutProductoInput, {
    nullable: false
  })
  create!: OrigenCreateWithoutProductoInput;
}

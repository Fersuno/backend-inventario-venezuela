import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { OrigenCreateOrConnectWithoutProductoInput } from "../inputs/OrigenCreateOrConnectWithoutProductoInput";
import { OrigenCreateWithoutProductoInput } from "../inputs/OrigenCreateWithoutProductoInput";
import { OrigenWhereUniqueInput } from "../inputs/OrigenWhereUniqueInput";

@TypeGraphQL.InputType("OrigenCreateNestedOneWithoutProductoInput", {
  isAbstract: true
})
export class OrigenCreateNestedOneWithoutProductoInput {
  @TypeGraphQL.Field(_type => OrigenCreateWithoutProductoInput, {
    nullable: true
  })
  create?: OrigenCreateWithoutProductoInput | undefined;

  @TypeGraphQL.Field(_type => OrigenCreateOrConnectWithoutProductoInput, {
    nullable: true
  })
  connectOrCreate?: OrigenCreateOrConnectWithoutProductoInput | undefined;

  @TypeGraphQL.Field(_type => OrigenWhereUniqueInput, {
    nullable: true
  })
  connect?: OrigenWhereUniqueInput | undefined;
}

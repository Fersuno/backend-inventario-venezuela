import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { CantidadCreateWithoutProductoInput } from "../inputs/CantidadCreateWithoutProductoInput";
import { CantidadWhereUniqueInput } from "../inputs/CantidadWhereUniqueInput";

@TypeGraphQL.InputType("CantidadCreateOrConnectWithoutProductoInput", {
  isAbstract: true
})
export class CantidadCreateOrConnectWithoutProductoInput {
  @TypeGraphQL.Field(_type => CantidadWhereUniqueInput, {
    nullable: false
  })
  where!: CantidadWhereUniqueInput;

  @TypeGraphQL.Field(_type => CantidadCreateWithoutProductoInput, {
    nullable: false
  })
  create!: CantidadCreateWithoutProductoInput;
}

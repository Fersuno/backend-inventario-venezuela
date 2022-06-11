import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { SedeCreateNestedOneWithoutCantidadInput } from "../inputs/SedeCreateNestedOneWithoutCantidadInput";

@TypeGraphQL.InputType("CantidadCreateWithoutProductoInput", {
  isAbstract: true
})
export class CantidadCreateWithoutProductoInput {
  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  cantidad!: number;

  @TypeGraphQL.Field(_type => SedeCreateNestedOneWithoutCantidadInput, {
    nullable: false
  })
  sede!: SedeCreateNestedOneWithoutCantidadInput;
}

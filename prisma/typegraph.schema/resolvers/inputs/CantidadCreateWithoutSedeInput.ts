import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ProductoCreateNestedOneWithoutCantidadInput } from "../inputs/ProductoCreateNestedOneWithoutCantidadInput";

@TypeGraphQL.InputType("CantidadCreateWithoutSedeInput", {
  isAbstract: true
})
export class CantidadCreateWithoutSedeInput {
  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  cantidad!: number;

  @TypeGraphQL.Field(_type => ProductoCreateNestedOneWithoutCantidadInput, {
    nullable: false
  })
  producto!: ProductoCreateNestedOneWithoutCantidadInput;
}

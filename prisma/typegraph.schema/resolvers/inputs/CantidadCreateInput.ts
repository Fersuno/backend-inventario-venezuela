import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ProductoCreateNestedOneWithoutCantidadInput } from "../inputs/ProductoCreateNestedOneWithoutCantidadInput";
import { SedeCreateNestedOneWithoutCantidadInput } from "../inputs/SedeCreateNestedOneWithoutCantidadInput";

@TypeGraphQL.InputType("CantidadCreateInput", {
  isAbstract: true
})
export class CantidadCreateInput {
  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  cantidad!: number;

  @TypeGraphQL.Field(_type => SedeCreateNestedOneWithoutCantidadInput, {
    nullable: false
  })
  sede!: SedeCreateNestedOneWithoutCantidadInput;

  @TypeGraphQL.Field(_type => ProductoCreateNestedOneWithoutCantidadInput, {
    nullable: false
  })
  producto!: ProductoCreateNestedOneWithoutCantidadInput;
}

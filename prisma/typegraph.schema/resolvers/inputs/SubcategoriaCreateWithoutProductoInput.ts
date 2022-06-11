import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { CategoriaCreateNestedOneWithoutSubcategoriaInput } from "../inputs/CategoriaCreateNestedOneWithoutSubcategoriaInput";

@TypeGraphQL.InputType("SubcategoriaCreateWithoutProductoInput", {
  isAbstract: true
})
export class SubcategoriaCreateWithoutProductoInput {
  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  nombre!: string;

  @TypeGraphQL.Field(_type => CategoriaCreateNestedOneWithoutSubcategoriaInput, {
    nullable: false
  })
  categoria!: CategoriaCreateNestedOneWithoutSubcategoriaInput;
}

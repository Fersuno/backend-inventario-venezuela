import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { SubcategoriaCreateNestedManyWithoutCategoriaInput } from "../inputs/SubcategoriaCreateNestedManyWithoutCategoriaInput";

@TypeGraphQL.InputType("CategoriaCreateWithoutProductoInput", {
  isAbstract: true
})
export class CategoriaCreateWithoutProductoInput {
  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  nombre!: string;

  @TypeGraphQL.Field(_type => SubcategoriaCreateNestedManyWithoutCategoriaInput, {
    nullable: true
  })
  subcategoria?: SubcategoriaCreateNestedManyWithoutCategoriaInput | undefined;
}

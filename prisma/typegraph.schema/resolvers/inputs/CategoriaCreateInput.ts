import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ProductoCreateNestedManyWithoutCategoriaInput } from "../inputs/ProductoCreateNestedManyWithoutCategoriaInput";
import { SubcategoriaCreateNestedManyWithoutCategoriaInput } from "../inputs/SubcategoriaCreateNestedManyWithoutCategoriaInput";

@TypeGraphQL.InputType("CategoriaCreateInput", {
  isAbstract: true
})
export class CategoriaCreateInput {
  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  nombre!: string;

  @TypeGraphQL.Field(_type => SubcategoriaCreateNestedManyWithoutCategoriaInput, {
    nullable: true
  })
  subcategoria?: SubcategoriaCreateNestedManyWithoutCategoriaInput | undefined;

  @TypeGraphQL.Field(_type => ProductoCreateNestedManyWithoutCategoriaInput, {
    nullable: true
  })
  producto?: ProductoCreateNestedManyWithoutCategoriaInput | undefined;
}

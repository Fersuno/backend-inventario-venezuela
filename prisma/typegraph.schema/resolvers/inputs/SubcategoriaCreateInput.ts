import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { CategoriaCreateNestedOneWithoutSubcategoriaInput } from "../inputs/CategoriaCreateNestedOneWithoutSubcategoriaInput";
import { ProductoCreateNestedManyWithoutSubcategoriaInput } from "../inputs/ProductoCreateNestedManyWithoutSubcategoriaInput";

@TypeGraphQL.InputType("SubcategoriaCreateInput", {
  isAbstract: true
})
export class SubcategoriaCreateInput {
  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  nombre!: string;

  @TypeGraphQL.Field(_type => CategoriaCreateNestedOneWithoutSubcategoriaInput, {
    nullable: false
  })
  categoria!: CategoriaCreateNestedOneWithoutSubcategoriaInput;

  @TypeGraphQL.Field(_type => ProductoCreateNestedManyWithoutSubcategoriaInput, {
    nullable: true
  })
  Producto?: ProductoCreateNestedManyWithoutSubcategoriaInput | undefined;
}

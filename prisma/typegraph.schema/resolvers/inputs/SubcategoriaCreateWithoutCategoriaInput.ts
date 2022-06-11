import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ProductoCreateNestedManyWithoutSubcategoriaInput } from "../inputs/ProductoCreateNestedManyWithoutSubcategoriaInput";

@TypeGraphQL.InputType("SubcategoriaCreateWithoutCategoriaInput", {
  isAbstract: true
})
export class SubcategoriaCreateWithoutCategoriaInput {
  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  nombre!: string;

  @TypeGraphQL.Field(_type => ProductoCreateNestedManyWithoutSubcategoriaInput, {
    nullable: true
  })
  Producto?: ProductoCreateNestedManyWithoutSubcategoriaInput | undefined;
}

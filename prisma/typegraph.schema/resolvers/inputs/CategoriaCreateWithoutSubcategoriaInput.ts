import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ProductoCreateNestedManyWithoutCategoriaInput } from "../inputs/ProductoCreateNestedManyWithoutCategoriaInput";

@TypeGraphQL.InputType("CategoriaCreateWithoutSubcategoriaInput", {
  isAbstract: true
})
export class CategoriaCreateWithoutSubcategoriaInput {
  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  nombre!: string;

  @TypeGraphQL.Field(_type => ProductoCreateNestedManyWithoutCategoriaInput, {
    nullable: true
  })
  producto?: ProductoCreateNestedManyWithoutCategoriaInput | undefined;
}

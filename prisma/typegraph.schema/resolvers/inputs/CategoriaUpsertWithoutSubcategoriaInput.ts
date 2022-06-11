import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { CategoriaCreateWithoutSubcategoriaInput } from "../inputs/CategoriaCreateWithoutSubcategoriaInput";
import { CategoriaUpdateWithoutSubcategoriaInput } from "../inputs/CategoriaUpdateWithoutSubcategoriaInput";

@TypeGraphQL.InputType("CategoriaUpsertWithoutSubcategoriaInput", {
  isAbstract: true
})
export class CategoriaUpsertWithoutSubcategoriaInput {
  @TypeGraphQL.Field(_type => CategoriaUpdateWithoutSubcategoriaInput, {
    nullable: false
  })
  update!: CategoriaUpdateWithoutSubcategoriaInput;

  @TypeGraphQL.Field(_type => CategoriaCreateWithoutSubcategoriaInput, {
    nullable: false
  })
  create!: CategoriaCreateWithoutSubcategoriaInput;
}

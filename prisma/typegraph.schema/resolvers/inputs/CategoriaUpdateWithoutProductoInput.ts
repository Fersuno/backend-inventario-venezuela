import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { StringFieldUpdateOperationsInput } from "../inputs/StringFieldUpdateOperationsInput";
import { SubcategoriaUpdateManyWithoutCategoriaInput } from "../inputs/SubcategoriaUpdateManyWithoutCategoriaInput";

@TypeGraphQL.InputType("CategoriaUpdateWithoutProductoInput", {
  isAbstract: true
})
export class CategoriaUpdateWithoutProductoInput {
  @TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput, {
    nullable: true
  })
  nombre?: StringFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => SubcategoriaUpdateManyWithoutCategoriaInput, {
    nullable: true
  })
  subcategoria?: SubcategoriaUpdateManyWithoutCategoriaInput | undefined;
}

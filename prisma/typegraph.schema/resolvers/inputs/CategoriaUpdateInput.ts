import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ProductoUpdateManyWithoutCategoriaInput } from "../inputs/ProductoUpdateManyWithoutCategoriaInput";
import { StringFieldUpdateOperationsInput } from "../inputs/StringFieldUpdateOperationsInput";
import { SubcategoriaUpdateManyWithoutCategoriaInput } from "../inputs/SubcategoriaUpdateManyWithoutCategoriaInput";

@TypeGraphQL.InputType("CategoriaUpdateInput", {
  isAbstract: true
})
export class CategoriaUpdateInput {
  @TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput, {
    nullable: true
  })
  nombre?: StringFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => SubcategoriaUpdateManyWithoutCategoriaInput, {
    nullable: true
  })
  subcategoria?: SubcategoriaUpdateManyWithoutCategoriaInput | undefined;

  @TypeGraphQL.Field(_type => ProductoUpdateManyWithoutCategoriaInput, {
    nullable: true
  })
  producto?: ProductoUpdateManyWithoutCategoriaInput | undefined;
}

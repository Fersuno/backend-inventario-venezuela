import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { CategoriaUpdateOneRequiredWithoutSubcategoriaInput } from "../inputs/CategoriaUpdateOneRequiredWithoutSubcategoriaInput";
import { ProductoUpdateManyWithoutSubcategoriaInput } from "../inputs/ProductoUpdateManyWithoutSubcategoriaInput";
import { StringFieldUpdateOperationsInput } from "../inputs/StringFieldUpdateOperationsInput";

@TypeGraphQL.InputType("SubcategoriaUpdateInput", {
  isAbstract: true
})
export class SubcategoriaUpdateInput {
  @TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput, {
    nullable: true
  })
  nombre?: StringFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => CategoriaUpdateOneRequiredWithoutSubcategoriaInput, {
    nullable: true
  })
  categoria?: CategoriaUpdateOneRequiredWithoutSubcategoriaInput | undefined;

  @TypeGraphQL.Field(_type => ProductoUpdateManyWithoutSubcategoriaInput, {
    nullable: true
  })
  Producto?: ProductoUpdateManyWithoutSubcategoriaInput | undefined;
}

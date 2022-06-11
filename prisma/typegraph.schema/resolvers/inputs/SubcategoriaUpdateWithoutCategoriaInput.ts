import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ProductoUpdateManyWithoutSubcategoriaInput } from "../inputs/ProductoUpdateManyWithoutSubcategoriaInput";
import { StringFieldUpdateOperationsInput } from "../inputs/StringFieldUpdateOperationsInput";

@TypeGraphQL.InputType("SubcategoriaUpdateWithoutCategoriaInput", {
  isAbstract: true
})
export class SubcategoriaUpdateWithoutCategoriaInput {
  @TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput, {
    nullable: true
  })
  nombre?: StringFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => ProductoUpdateManyWithoutSubcategoriaInput, {
    nullable: true
  })
  Producto?: ProductoUpdateManyWithoutSubcategoriaInput | undefined;
}

import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { BoolFieldUpdateOperationsInput } from "../inputs/BoolFieldUpdateOperationsInput";
import { CantidadUpdateManyWithoutProductoInput } from "../inputs/CantidadUpdateManyWithoutProductoInput";
import { CategoriaUpdateOneRequiredWithoutProductoInput } from "../inputs/CategoriaUpdateOneRequiredWithoutProductoInput";
import { IntFieldUpdateOperationsInput } from "../inputs/IntFieldUpdateOperationsInput";
import { MarcaUpdateOneWithoutProductoInput } from "../inputs/MarcaUpdateOneWithoutProductoInput";
import { NullableStringFieldUpdateOperationsInput } from "../inputs/NullableStringFieldUpdateOperationsInput";
import { OrigenUpdateOneRequiredWithoutProductoInput } from "../inputs/OrigenUpdateOneRequiredWithoutProductoInput";
import { PrecioVentaUpdateOneRequiredWithoutProductoInput } from "../inputs/PrecioVentaUpdateOneRequiredWithoutProductoInput";
import { StringFieldUpdateOperationsInput } from "../inputs/StringFieldUpdateOperationsInput";
import { SubcategoriaUpdateOneWithoutProductoInput } from "../inputs/SubcategoriaUpdateOneWithoutProductoInput";

@TypeGraphQL.InputType("ProductoUpdateWithoutPrecioAlmacenInput", {
  isAbstract: true
})
export class ProductoUpdateWithoutPrecioAlmacenInput {
  @TypeGraphQL.Field(_type => NullableStringFieldUpdateOperationsInput, {
    nullable: true
  })
  modelo?: NullableStringFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput, {
    nullable: true
  })
  foto?: StringFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => BoolFieldUpdateOperationsInput, {
    nullable: true
  })
  cuenta?: BoolFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => BoolFieldUpdateOperationsInput, {
    nullable: true
  })
  retirado?: BoolFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => IntFieldUpdateOperationsInput, {
    nullable: true
  })
  cantidad?: IntFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => CantidadUpdateManyWithoutProductoInput, {
    nullable: true
  })
  Cantidad?: CantidadUpdateManyWithoutProductoInput | undefined;

  @TypeGraphQL.Field(_type => MarcaUpdateOneWithoutProductoInput, {
    nullable: true
  })
  marca?: MarcaUpdateOneWithoutProductoInput | undefined;

  @TypeGraphQL.Field(_type => OrigenUpdateOneRequiredWithoutProductoInput, {
    nullable: true
  })
  origen?: OrigenUpdateOneRequiredWithoutProductoInput | undefined;

  @TypeGraphQL.Field(_type => CategoriaUpdateOneRequiredWithoutProductoInput, {
    nullable: true
  })
  categoria?: CategoriaUpdateOneRequiredWithoutProductoInput | undefined;

  @TypeGraphQL.Field(_type => SubcategoriaUpdateOneWithoutProductoInput, {
    nullable: true
  })
  subcategoria?: SubcategoriaUpdateOneWithoutProductoInput | undefined;

  @TypeGraphQL.Field(_type => PrecioVentaUpdateOneRequiredWithoutProductoInput, {
    nullable: true
  })
  precioVenta?: PrecioVentaUpdateOneRequiredWithoutProductoInput | undefined;
}

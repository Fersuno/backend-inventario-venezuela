import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { DecimalFieldUpdateOperationsInput } from "../inputs/DecimalFieldUpdateOperationsInput";
import { NullableDecimalFieldUpdateOperationsInput } from "../inputs/NullableDecimalFieldUpdateOperationsInput";
import { ProductoUpdateManyWithoutPrecioAlmacenInput } from "../inputs/ProductoUpdateManyWithoutPrecioAlmacenInput";

@TypeGraphQL.InputType("PrecioAlmacenUpdateInput", {
  isAbstract: true
})
export class PrecioAlmacenUpdateInput {
  @TypeGraphQL.Field(_type => NullableDecimalFieldUpdateOperationsInput, {
    nullable: true
  })
  rmb?: NullableDecimalFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => DecimalFieldUpdateOperationsInput, {
    nullable: true
  })
  cif?: DecimalFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => NullableDecimalFieldUpdateOperationsInput, {
    nullable: true
  })
  mnj?: NullableDecimalFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => ProductoUpdateManyWithoutPrecioAlmacenInput, {
    nullable: true
  })
  producto?: ProductoUpdateManyWithoutPrecioAlmacenInput | undefined;
}

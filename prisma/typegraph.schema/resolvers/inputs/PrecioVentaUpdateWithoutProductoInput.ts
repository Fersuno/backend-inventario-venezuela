import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { DecimalFieldUpdateOperationsInput } from "../inputs/DecimalFieldUpdateOperationsInput";
import { NullableDecimalFieldUpdateOperationsInput } from "../inputs/NullableDecimalFieldUpdateOperationsInput";

@TypeGraphQL.InputType("PrecioVentaUpdateWithoutProductoInput", {
  isAbstract: true
})
export class PrecioVentaUpdateWithoutProductoInput {
  @TypeGraphQL.Field(_type => DecimalFieldUpdateOperationsInput, {
    nullable: true
  })
  a?: DecimalFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => NullableDecimalFieldUpdateOperationsInput, {
    nullable: true
  })
  aa?: NullableDecimalFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => NullableDecimalFieldUpdateOperationsInput, {
    nullable: true
  })
  aaa?: NullableDecimalFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => NullableDecimalFieldUpdateOperationsInput, {
    nullable: true
  })
  detal?: NullableDecimalFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => NullableDecimalFieldUpdateOperationsInput, {
    nullable: true
  })
  instalacion?: NullableDecimalFieldUpdateOperationsInput | undefined;
}

import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { IntFieldUpdateOperationsInput } from "../inputs/IntFieldUpdateOperationsInput";
import { SedeUpdateOneRequiredWithoutCantidadInput } from "../inputs/SedeUpdateOneRequiredWithoutCantidadInput";

@TypeGraphQL.InputType("CantidadUpdateWithoutProductoInput", {
  isAbstract: true
})
export class CantidadUpdateWithoutProductoInput {
  @TypeGraphQL.Field(_type => IntFieldUpdateOperationsInput, {
    nullable: true
  })
  cantidad?: IntFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => SedeUpdateOneRequiredWithoutCantidadInput, {
    nullable: true
  })
  sede?: SedeUpdateOneRequiredWithoutCantidadInput | undefined;
}

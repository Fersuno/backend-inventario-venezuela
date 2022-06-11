import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { IntFieldUpdateOperationsInput } from "../inputs/IntFieldUpdateOperationsInput";
import { ProductoUpdateOneRequiredWithoutCantidadInput } from "../inputs/ProductoUpdateOneRequiredWithoutCantidadInput";

@TypeGraphQL.InputType("CantidadUpdateWithoutSedeInput", {
  isAbstract: true
})
export class CantidadUpdateWithoutSedeInput {
  @TypeGraphQL.Field(_type => IntFieldUpdateOperationsInput, {
    nullable: true
  })
  cantidad?: IntFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => ProductoUpdateOneRequiredWithoutCantidadInput, {
    nullable: true
  })
  producto?: ProductoUpdateOneRequiredWithoutCantidadInput | undefined;
}

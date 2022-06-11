import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { IntFieldUpdateOperationsInput } from "../inputs/IntFieldUpdateOperationsInput";
import { ProductoUpdateOneRequiredWithoutCantidadInput } from "../inputs/ProductoUpdateOneRequiredWithoutCantidadInput";
import { SedeUpdateOneRequiredWithoutCantidadInput } from "../inputs/SedeUpdateOneRequiredWithoutCantidadInput";

@TypeGraphQL.InputType("CantidadUpdateInput", {
  isAbstract: true
})
export class CantidadUpdateInput {
  @TypeGraphQL.Field(_type => IntFieldUpdateOperationsInput, {
    nullable: true
  })
  cantidad?: IntFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => SedeUpdateOneRequiredWithoutCantidadInput, {
    nullable: true
  })
  sede?: SedeUpdateOneRequiredWithoutCantidadInput | undefined;

  @TypeGraphQL.Field(_type => ProductoUpdateOneRequiredWithoutCantidadInput, {
    nullable: true
  })
  producto?: ProductoUpdateOneRequiredWithoutCantidadInput | undefined;
}

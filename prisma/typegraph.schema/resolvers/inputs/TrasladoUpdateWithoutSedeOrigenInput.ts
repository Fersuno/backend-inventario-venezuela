import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { BoolFieldUpdateOperationsInput } from "../inputs/BoolFieldUpdateOperationsInput";
import { DateTimeFieldUpdateOperationsInput } from "../inputs/DateTimeFieldUpdateOperationsInput";
import { SedeUpdateOneRequiredWithoutMovimientosDestinoInput } from "../inputs/SedeUpdateOneRequiredWithoutMovimientosDestinoInput";
import { SedeUpdateOneRequiredWithoutTrasladosInput } from "../inputs/SedeUpdateOneRequiredWithoutTrasladosInput";

@TypeGraphQL.InputType("TrasladoUpdateWithoutSedeOrigenInput", {
  isAbstract: true
})
export class TrasladoUpdateWithoutSedeOrigenInput {
  @TypeGraphQL.Field(_type => BoolFieldUpdateOperationsInput, {
    nullable: true
  })
  confirmacion?: BoolFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => DateTimeFieldUpdateOperationsInput, {
    nullable: true
  })
  fechaEnvio?: DateTimeFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => DateTimeFieldUpdateOperationsInput, {
    nullable: true
  })
  fechaConfirmacion?: DateTimeFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => SedeUpdateOneRequiredWithoutTrasladosInput, {
    nullable: true
  })
  sede?: SedeUpdateOneRequiredWithoutTrasladosInput | undefined;

  @TypeGraphQL.Field(_type => SedeUpdateOneRequiredWithoutMovimientosDestinoInput, {
    nullable: true
  })
  sedeDestino?: SedeUpdateOneRequiredWithoutMovimientosDestinoInput | undefined;
}

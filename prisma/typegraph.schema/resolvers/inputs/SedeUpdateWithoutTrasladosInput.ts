import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { CantidadUpdateManyWithoutSedeInput } from "../inputs/CantidadUpdateManyWithoutSedeInput";
import { EstadoUpdateOneRequiredWithoutSedesInput } from "../inputs/EstadoUpdateOneRequiredWithoutSedesInput";
import { StringFieldUpdateOperationsInput } from "../inputs/StringFieldUpdateOperationsInput";
import { TrasladoUpdateManyWithoutSedeDestinoInput } from "../inputs/TrasladoUpdateManyWithoutSedeDestinoInput";
import { TrasladoUpdateManyWithoutSedeOrigenInput } from "../inputs/TrasladoUpdateManyWithoutSedeOrigenInput";

@TypeGraphQL.InputType("SedeUpdateWithoutTrasladosInput", {
  isAbstract: true
})
export class SedeUpdateWithoutTrasladosInput {
  @TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput, {
    nullable: true
  })
  nombre?: StringFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => EstadoUpdateOneRequiredWithoutSedesInput, {
    nullable: true
  })
  estado?: EstadoUpdateOneRequiredWithoutSedesInput | undefined;

  @TypeGraphQL.Field(_type => TrasladoUpdateManyWithoutSedeDestinoInput, {
    nullable: true
  })
  movimientosDestino?: TrasladoUpdateManyWithoutSedeDestinoInput | undefined;

  @TypeGraphQL.Field(_type => TrasladoUpdateManyWithoutSedeOrigenInput, {
    nullable: true
  })
  movimientosOrigen?: TrasladoUpdateManyWithoutSedeOrigenInput | undefined;

  @TypeGraphQL.Field(_type => CantidadUpdateManyWithoutSedeInput, {
    nullable: true
  })
  Cantidad?: CantidadUpdateManyWithoutSedeInput | undefined;
}

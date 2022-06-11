import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { CantidadUpdateManyWithoutSedeInput } from "../inputs/CantidadUpdateManyWithoutSedeInput";
import { StringFieldUpdateOperationsInput } from "../inputs/StringFieldUpdateOperationsInput";
import { TrasladoUpdateManyWithoutSedeDestinoInput } from "../inputs/TrasladoUpdateManyWithoutSedeDestinoInput";
import { TrasladoUpdateManyWithoutSedeInput } from "../inputs/TrasladoUpdateManyWithoutSedeInput";
import { TrasladoUpdateManyWithoutSedeOrigenInput } from "../inputs/TrasladoUpdateManyWithoutSedeOrigenInput";

@TypeGraphQL.InputType("SedeUpdateWithoutEstadoInput", {
  isAbstract: true
})
export class SedeUpdateWithoutEstadoInput {
  @TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput, {
    nullable: true
  })
  nombre?: StringFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => TrasladoUpdateManyWithoutSedeDestinoInput, {
    nullable: true
  })
  movimientosDestino?: TrasladoUpdateManyWithoutSedeDestinoInput | undefined;

  @TypeGraphQL.Field(_type => TrasladoUpdateManyWithoutSedeOrigenInput, {
    nullable: true
  })
  movimientosOrigen?: TrasladoUpdateManyWithoutSedeOrigenInput | undefined;

  @TypeGraphQL.Field(_type => TrasladoUpdateManyWithoutSedeInput, {
    nullable: true
  })
  traslados?: TrasladoUpdateManyWithoutSedeInput | undefined;

  @TypeGraphQL.Field(_type => CantidadUpdateManyWithoutSedeInput, {
    nullable: true
  })
  Cantidad?: CantidadUpdateManyWithoutSedeInput | undefined;
}

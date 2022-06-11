import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { CantidadCreateNestedManyWithoutSedeInput } from "../inputs/CantidadCreateNestedManyWithoutSedeInput";
import { EstadoCreateNestedOneWithoutSedesInput } from "../inputs/EstadoCreateNestedOneWithoutSedesInput";
import { TrasladoCreateNestedManyWithoutSedeDestinoInput } from "../inputs/TrasladoCreateNestedManyWithoutSedeDestinoInput";
import { TrasladoCreateNestedManyWithoutSedeInput } from "../inputs/TrasladoCreateNestedManyWithoutSedeInput";

@TypeGraphQL.InputType("SedeCreateWithoutMovimientosOrigenInput", {
  isAbstract: true
})
export class SedeCreateWithoutMovimientosOrigenInput {
  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  nombre!: string;

  @TypeGraphQL.Field(_type => EstadoCreateNestedOneWithoutSedesInput, {
    nullable: false
  })
  estado!: EstadoCreateNestedOneWithoutSedesInput;

  @TypeGraphQL.Field(_type => TrasladoCreateNestedManyWithoutSedeDestinoInput, {
    nullable: true
  })
  movimientosDestino?: TrasladoCreateNestedManyWithoutSedeDestinoInput | undefined;

  @TypeGraphQL.Field(_type => TrasladoCreateNestedManyWithoutSedeInput, {
    nullable: true
  })
  traslados?: TrasladoCreateNestedManyWithoutSedeInput | undefined;

  @TypeGraphQL.Field(_type => CantidadCreateNestedManyWithoutSedeInput, {
    nullable: true
  })
  Cantidad?: CantidadCreateNestedManyWithoutSedeInput | undefined;
}

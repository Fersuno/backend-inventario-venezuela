import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { SedeCreateNestedOneWithoutMovimientosDestinoInput } from "../inputs/SedeCreateNestedOneWithoutMovimientosDestinoInput";
import { SedeCreateNestedOneWithoutMovimientosOrigenInput } from "../inputs/SedeCreateNestedOneWithoutMovimientosOrigenInput";

@TypeGraphQL.InputType("TrasladoCreateWithoutSedeInput", {
  isAbstract: true
})
export class TrasladoCreateWithoutSedeInput {
  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  confirmacion?: boolean | undefined;

  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  fechaEnvio?: Date | undefined;

  @TypeGraphQL.Field(_type => Date, {
    nullable: false
  })
  fechaConfirmacion!: Date;

  @TypeGraphQL.Field(_type => SedeCreateNestedOneWithoutMovimientosOrigenInput, {
    nullable: false
  })
  sedeOrigen!: SedeCreateNestedOneWithoutMovimientosOrigenInput;

  @TypeGraphQL.Field(_type => SedeCreateNestedOneWithoutMovimientosDestinoInput, {
    nullable: false
  })
  sedeDestino!: SedeCreateNestedOneWithoutMovimientosDestinoInput;
}

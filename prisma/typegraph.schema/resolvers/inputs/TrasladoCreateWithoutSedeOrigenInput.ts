import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { SedeCreateNestedOneWithoutMovimientosDestinoInput } from "../inputs/SedeCreateNestedOneWithoutMovimientosDestinoInput";
import { SedeCreateNestedOneWithoutTrasladosInput } from "../inputs/SedeCreateNestedOneWithoutTrasladosInput";

@TypeGraphQL.InputType("TrasladoCreateWithoutSedeOrigenInput", {
  isAbstract: true
})
export class TrasladoCreateWithoutSedeOrigenInput {
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

  @TypeGraphQL.Field(_type => SedeCreateNestedOneWithoutTrasladosInput, {
    nullable: false
  })
  sede!: SedeCreateNestedOneWithoutTrasladosInput;

  @TypeGraphQL.Field(_type => SedeCreateNestedOneWithoutMovimientosDestinoInput, {
    nullable: false
  })
  sedeDestino!: SedeCreateNestedOneWithoutMovimientosDestinoInput;
}

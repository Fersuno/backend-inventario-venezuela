import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { SedeCreateNestedOneWithoutMovimientosOrigenInput } from "../inputs/SedeCreateNestedOneWithoutMovimientosOrigenInput";
import { SedeCreateNestedOneWithoutTrasladosInput } from "../inputs/SedeCreateNestedOneWithoutTrasladosInput";

@TypeGraphQL.InputType("TrasladoCreateWithoutSedeDestinoInput", {
  isAbstract: true
})
export class TrasladoCreateWithoutSedeDestinoInput {
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

  @TypeGraphQL.Field(_type => SedeCreateNestedOneWithoutMovimientosOrigenInput, {
    nullable: false
  })
  sedeOrigen!: SedeCreateNestedOneWithoutMovimientosOrigenInput;
}

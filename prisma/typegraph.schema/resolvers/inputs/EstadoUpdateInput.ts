import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { SedeUpdateManyWithoutEstadoInput } from "../inputs/SedeUpdateManyWithoutEstadoInput";
import { StringFieldUpdateOperationsInput } from "../inputs/StringFieldUpdateOperationsInput";

@TypeGraphQL.InputType("EstadoUpdateInput", {
  isAbstract: true
})
export class EstadoUpdateInput {
  @TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput, {
    nullable: true
  })
  nombre?: StringFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => SedeUpdateManyWithoutEstadoInput, {
    nullable: true
  })
  sedes?: SedeUpdateManyWithoutEstadoInput | undefined;
}

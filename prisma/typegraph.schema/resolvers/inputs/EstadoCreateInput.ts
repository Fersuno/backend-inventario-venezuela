import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { SedeCreateNestedManyWithoutEstadoInput } from "../inputs/SedeCreateNestedManyWithoutEstadoInput";

@TypeGraphQL.InputType("EstadoCreateInput", {
  isAbstract: true
})
export class EstadoCreateInput {
  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  nombre!: string;

  @TypeGraphQL.Field(_type => SedeCreateNestedManyWithoutEstadoInput, {
    nullable: true
  })
  sedes?: SedeCreateNestedManyWithoutEstadoInput | undefined;
}

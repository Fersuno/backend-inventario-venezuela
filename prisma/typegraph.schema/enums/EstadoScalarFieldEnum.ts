import * as TypeGraphQL from "type-graphql";

export enum EstadoScalarFieldEnum {
  id = "id",
  nombre = "nombre"
}
TypeGraphQL.registerEnumType(EstadoScalarFieldEnum, {
  name: "EstadoScalarFieldEnum",
  description: undefined,
});

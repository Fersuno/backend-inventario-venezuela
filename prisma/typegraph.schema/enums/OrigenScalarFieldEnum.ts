import * as TypeGraphQL from "type-graphql";

export enum OrigenScalarFieldEnum {
  id = "id",
  nombre = "nombre",
  porcentaje = "porcentaje"
}
TypeGraphQL.registerEnumType(OrigenScalarFieldEnum, {
  name: "OrigenScalarFieldEnum",
  description: undefined,
});

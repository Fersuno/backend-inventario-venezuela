import * as TypeGraphQL from "type-graphql";

export enum SedeScalarFieldEnum {
  id = "id",
  nombre = "nombre",
  estadoId = "estadoId"
}
TypeGraphQL.registerEnumType(SedeScalarFieldEnum, {
  name: "SedeScalarFieldEnum",
  description: undefined,
});

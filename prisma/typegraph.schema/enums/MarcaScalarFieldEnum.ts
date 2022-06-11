import * as TypeGraphQL from "type-graphql";

export enum MarcaScalarFieldEnum {
  id = "id",
  nombre = "nombre"
}
TypeGraphQL.registerEnumType(MarcaScalarFieldEnum, {
  name: "MarcaScalarFieldEnum",
  description: undefined,
});

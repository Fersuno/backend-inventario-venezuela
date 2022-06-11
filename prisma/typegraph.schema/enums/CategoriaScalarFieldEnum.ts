import * as TypeGraphQL from "type-graphql";

export enum CategoriaScalarFieldEnum {
  id = "id",
  nombre = "nombre"
}
TypeGraphQL.registerEnumType(CategoriaScalarFieldEnum, {
  name: "CategoriaScalarFieldEnum",
  description: undefined,
});

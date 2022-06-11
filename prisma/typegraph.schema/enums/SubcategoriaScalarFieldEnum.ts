import * as TypeGraphQL from "type-graphql";

export enum SubcategoriaScalarFieldEnum {
  id = "id",
  nombre = "nombre",
  categoriaId = "categoriaId"
}
TypeGraphQL.registerEnumType(SubcategoriaScalarFieldEnum, {
  name: "SubcategoriaScalarFieldEnum",
  description: undefined,
});

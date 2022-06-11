import * as TypeGraphQL from "type-graphql";

export enum CantidadScalarFieldEnum {
  id = "id",
  cantidad = "cantidad",
  sedeId = "sedeId",
  productoId = "productoId"
}
TypeGraphQL.registerEnumType(CantidadScalarFieldEnum, {
  name: "CantidadScalarFieldEnum",
  description: undefined,
});

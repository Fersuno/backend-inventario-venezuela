import * as TypeGraphQL from "type-graphql";

export enum ProductoScalarFieldEnum {
  id = "id",
  modelo = "modelo",
  foto = "foto",
  cuenta = "cuenta",
  retirado = "retirado",
  cantidad = "cantidad",
  marcaId = "marcaId",
  origenId = "origenId",
  categoriaId = "categoriaId",
  subcategoriaId = "subcategoriaId",
  precioVentaId = "precioVentaId",
  precioAlmacenId = "precioAlmacenId"
}
TypeGraphQL.registerEnumType(ProductoScalarFieldEnum, {
  name: "ProductoScalarFieldEnum",
  description: undefined,
});

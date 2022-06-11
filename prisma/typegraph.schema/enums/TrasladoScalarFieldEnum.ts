import * as TypeGraphQL from "type-graphql";

export enum TrasladoScalarFieldEnum {
  id = "id",
  confirmacion = "confirmacion",
  fechaEnvio = "fechaEnvio",
  fechaConfirmacion = "fechaConfirmacion",
  sedeId = "sedeId",
  sedeOrigenId = "sedeOrigenId",
  sedeDestinoId = "sedeDestinoId"
}
TypeGraphQL.registerEnumType(TrasladoScalarFieldEnum, {
  name: "TrasladoScalarFieldEnum",
  description: undefined,
});

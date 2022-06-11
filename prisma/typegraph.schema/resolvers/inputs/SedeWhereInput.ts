import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { CantidadListRelationFilter } from "../inputs/CantidadListRelationFilter";
import { EstadoRelationFilter } from "../inputs/EstadoRelationFilter";
import { IntFilter } from "../inputs/IntFilter";
import { StringFilter } from "../inputs/StringFilter";
import { TrasladoListRelationFilter } from "../inputs/TrasladoListRelationFilter";

@TypeGraphQL.InputType("SedeWhereInput", {
  isAbstract: true
})
export class SedeWhereInput {
  @TypeGraphQL.Field(_type => [SedeWhereInput], {
    nullable: true
  })
  AND?: SedeWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [SedeWhereInput], {
    nullable: true
  })
  OR?: SedeWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [SedeWhereInput], {
    nullable: true
  })
  NOT?: SedeWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => IntFilter, {
    nullable: true
  })
  id?: IntFilter | undefined;

  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true
  })
  nombre?: StringFilter | undefined;

  @TypeGraphQL.Field(_type => IntFilter, {
    nullable: true
  })
  estadoId?: IntFilter | undefined;

  @TypeGraphQL.Field(_type => EstadoRelationFilter, {
    nullable: true
  })
  estado?: EstadoRelationFilter | undefined;

  @TypeGraphQL.Field(_type => TrasladoListRelationFilter, {
    nullable: true
  })
  movimientosDestino?: TrasladoListRelationFilter | undefined;

  @TypeGraphQL.Field(_type => TrasladoListRelationFilter, {
    nullable: true
  })
  movimientosOrigen?: TrasladoListRelationFilter | undefined;

  @TypeGraphQL.Field(_type => TrasladoListRelationFilter, {
    nullable: true
  })
  traslados?: TrasladoListRelationFilter | undefined;

  @TypeGraphQL.Field(_type => CantidadListRelationFilter, {
    nullable: true
  })
  Cantidad?: CantidadListRelationFilter | undefined;
}

import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { CantidadOrderByRelationAggregateInput } from "../inputs/CantidadOrderByRelationAggregateInput";
import { EstadoOrderByWithRelationInput } from "../inputs/EstadoOrderByWithRelationInput";
import { TrasladoOrderByRelationAggregateInput } from "../inputs/TrasladoOrderByRelationAggregateInput";
import { SortOrder } from "../../enums/SortOrder";

@TypeGraphQL.InputType("SedeOrderByWithRelationInput", {
  isAbstract: true
})
export class SedeOrderByWithRelationInput {
  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  id?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  nombre?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  estadoId?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => EstadoOrderByWithRelationInput, {
    nullable: true
  })
  estado?: EstadoOrderByWithRelationInput | undefined;

  @TypeGraphQL.Field(_type => TrasladoOrderByRelationAggregateInput, {
    nullable: true
  })
  movimientosDestino?: TrasladoOrderByRelationAggregateInput | undefined;

  @TypeGraphQL.Field(_type => TrasladoOrderByRelationAggregateInput, {
    nullable: true
  })
  movimientosOrigen?: TrasladoOrderByRelationAggregateInput | undefined;

  @TypeGraphQL.Field(_type => TrasladoOrderByRelationAggregateInput, {
    nullable: true
  })
  traslados?: TrasladoOrderByRelationAggregateInput | undefined;

  @TypeGraphQL.Field(_type => CantidadOrderByRelationAggregateInput, {
    nullable: true
  })
  Cantidad?: CantidadOrderByRelationAggregateInput | undefined;
}

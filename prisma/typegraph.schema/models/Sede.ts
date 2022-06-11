import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../scalars";
import { Cantidad } from "../models/Cantidad";
import { Estado } from "../models/Estado";
import { Traslado } from "../models/Traslado";
import { SedeCount } from "../resolvers/outputs/SedeCount";

@TypeGraphQL.ObjectType("Sede", {
  isAbstract: true
})
export class Sede {
  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  id!: number;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  nombre!: string;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  estadoId!: number;

  estado?: Estado;

  movimientosDestino?: Traslado[];

  movimientosOrigen?: Traslado[];

  traslados?: Traslado[];

  Cantidad?: Cantidad[];

  @TypeGraphQL.Field(_type => SedeCount, {
    nullable: true
  })
  _count?: SedeCount | null;
}

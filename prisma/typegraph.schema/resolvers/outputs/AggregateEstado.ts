import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { EstadoAvgAggregate } from "../outputs/EstadoAvgAggregate";
import { EstadoCountAggregate } from "../outputs/EstadoCountAggregate";
import { EstadoMaxAggregate } from "../outputs/EstadoMaxAggregate";
import { EstadoMinAggregate } from "../outputs/EstadoMinAggregate";
import { EstadoSumAggregate } from "../outputs/EstadoSumAggregate";

@TypeGraphQL.ObjectType("AggregateEstado", {
  isAbstract: true
})
export class AggregateEstado {
  @TypeGraphQL.Field(_type => EstadoCountAggregate, {
    nullable: true
  })
  _count!: EstadoCountAggregate | null;

  @TypeGraphQL.Field(_type => EstadoAvgAggregate, {
    nullable: true
  })
  _avg!: EstadoAvgAggregate | null;

  @TypeGraphQL.Field(_type => EstadoSumAggregate, {
    nullable: true
  })
  _sum!: EstadoSumAggregate | null;

  @TypeGraphQL.Field(_type => EstadoMinAggregate, {
    nullable: true
  })
  _min!: EstadoMinAggregate | null;

  @TypeGraphQL.Field(_type => EstadoMaxAggregate, {
    nullable: true
  })
  _max!: EstadoMaxAggregate | null;
}

import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { TrasladoAvgAggregate } from "../outputs/TrasladoAvgAggregate";
import { TrasladoCountAggregate } from "../outputs/TrasladoCountAggregate";
import { TrasladoMaxAggregate } from "../outputs/TrasladoMaxAggregate";
import { TrasladoMinAggregate } from "../outputs/TrasladoMinAggregate";
import { TrasladoSumAggregate } from "../outputs/TrasladoSumAggregate";

@TypeGraphQL.ObjectType("AggregateTraslado", {
  isAbstract: true
})
export class AggregateTraslado {
  @TypeGraphQL.Field(_type => TrasladoCountAggregate, {
    nullable: true
  })
  _count!: TrasladoCountAggregate | null;

  @TypeGraphQL.Field(_type => TrasladoAvgAggregate, {
    nullable: true
  })
  _avg!: TrasladoAvgAggregate | null;

  @TypeGraphQL.Field(_type => TrasladoSumAggregate, {
    nullable: true
  })
  _sum!: TrasladoSumAggregate | null;

  @TypeGraphQL.Field(_type => TrasladoMinAggregate, {
    nullable: true
  })
  _min!: TrasladoMinAggregate | null;

  @TypeGraphQL.Field(_type => TrasladoMaxAggregate, {
    nullable: true
  })
  _max!: TrasladoMaxAggregate | null;
}

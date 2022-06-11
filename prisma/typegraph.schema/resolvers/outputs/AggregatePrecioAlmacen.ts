import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PrecioAlmacenAvgAggregate } from "../outputs/PrecioAlmacenAvgAggregate";
import { PrecioAlmacenCountAggregate } from "../outputs/PrecioAlmacenCountAggregate";
import { PrecioAlmacenMaxAggregate } from "../outputs/PrecioAlmacenMaxAggregate";
import { PrecioAlmacenMinAggregate } from "../outputs/PrecioAlmacenMinAggregate";
import { PrecioAlmacenSumAggregate } from "../outputs/PrecioAlmacenSumAggregate";

@TypeGraphQL.ObjectType("AggregatePrecioAlmacen", {
  isAbstract: true
})
export class AggregatePrecioAlmacen {
  @TypeGraphQL.Field(_type => PrecioAlmacenCountAggregate, {
    nullable: true
  })
  _count!: PrecioAlmacenCountAggregate | null;

  @TypeGraphQL.Field(_type => PrecioAlmacenAvgAggregate, {
    nullable: true
  })
  _avg!: PrecioAlmacenAvgAggregate | null;

  @TypeGraphQL.Field(_type => PrecioAlmacenSumAggregate, {
    nullable: true
  })
  _sum!: PrecioAlmacenSumAggregate | null;

  @TypeGraphQL.Field(_type => PrecioAlmacenMinAggregate, {
    nullable: true
  })
  _min!: PrecioAlmacenMinAggregate | null;

  @TypeGraphQL.Field(_type => PrecioAlmacenMaxAggregate, {
    nullable: true
  })
  _max!: PrecioAlmacenMaxAggregate | null;
}

import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { OrigenAvgAggregate } from "../outputs/OrigenAvgAggregate";
import { OrigenCountAggregate } from "../outputs/OrigenCountAggregate";
import { OrigenMaxAggregate } from "../outputs/OrigenMaxAggregate";
import { OrigenMinAggregate } from "../outputs/OrigenMinAggregate";
import { OrigenSumAggregate } from "../outputs/OrigenSumAggregate";

@TypeGraphQL.ObjectType("AggregateOrigen", {
  isAbstract: true
})
export class AggregateOrigen {
  @TypeGraphQL.Field(_type => OrigenCountAggregate, {
    nullable: true
  })
  _count!: OrigenCountAggregate | null;

  @TypeGraphQL.Field(_type => OrigenAvgAggregate, {
    nullable: true
  })
  _avg!: OrigenAvgAggregate | null;

  @TypeGraphQL.Field(_type => OrigenSumAggregate, {
    nullable: true
  })
  _sum!: OrigenSumAggregate | null;

  @TypeGraphQL.Field(_type => OrigenMinAggregate, {
    nullable: true
  })
  _min!: OrigenMinAggregate | null;

  @TypeGraphQL.Field(_type => OrigenMaxAggregate, {
    nullable: true
  })
  _max!: OrigenMaxAggregate | null;
}

import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { OrigenAvgAggregate } from "../outputs/OrigenAvgAggregate";
import { OrigenCountAggregate } from "../outputs/OrigenCountAggregate";
import { OrigenMaxAggregate } from "../outputs/OrigenMaxAggregate";
import { OrigenMinAggregate } from "../outputs/OrigenMinAggregate";
import { OrigenSumAggregate } from "../outputs/OrigenSumAggregate";

@TypeGraphQL.ObjectType("OrigenGroupBy", {
  isAbstract: true
})
export class OrigenGroupBy {
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
  porcentaje!: number;

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

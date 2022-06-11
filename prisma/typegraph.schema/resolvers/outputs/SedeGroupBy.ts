import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { SedeAvgAggregate } from "../outputs/SedeAvgAggregate";
import { SedeCountAggregate } from "../outputs/SedeCountAggregate";
import { SedeMaxAggregate } from "../outputs/SedeMaxAggregate";
import { SedeMinAggregate } from "../outputs/SedeMinAggregate";
import { SedeSumAggregate } from "../outputs/SedeSumAggregate";

@TypeGraphQL.ObjectType("SedeGroupBy", {
  isAbstract: true
})
export class SedeGroupBy {
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

  @TypeGraphQL.Field(_type => SedeCountAggregate, {
    nullable: true
  })
  _count!: SedeCountAggregate | null;

  @TypeGraphQL.Field(_type => SedeAvgAggregate, {
    nullable: true
  })
  _avg!: SedeAvgAggregate | null;

  @TypeGraphQL.Field(_type => SedeSumAggregate, {
    nullable: true
  })
  _sum!: SedeSumAggregate | null;

  @TypeGraphQL.Field(_type => SedeMinAggregate, {
    nullable: true
  })
  _min!: SedeMinAggregate | null;

  @TypeGraphQL.Field(_type => SedeMaxAggregate, {
    nullable: true
  })
  _max!: SedeMaxAggregate | null;
}

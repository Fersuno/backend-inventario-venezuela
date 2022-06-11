import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { CantidadAvgAggregate } from "../outputs/CantidadAvgAggregate";
import { CantidadCountAggregate } from "../outputs/CantidadCountAggregate";
import { CantidadMaxAggregate } from "../outputs/CantidadMaxAggregate";
import { CantidadMinAggregate } from "../outputs/CantidadMinAggregate";
import { CantidadSumAggregate } from "../outputs/CantidadSumAggregate";

@TypeGraphQL.ObjectType("CantidadGroupBy", {
  isAbstract: true
})
export class CantidadGroupBy {
  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  id!: number;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  cantidad!: number;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  sedeId!: number;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  productoId!: number;

  @TypeGraphQL.Field(_type => CantidadCountAggregate, {
    nullable: true
  })
  _count!: CantidadCountAggregate | null;

  @TypeGraphQL.Field(_type => CantidadAvgAggregate, {
    nullable: true
  })
  _avg!: CantidadAvgAggregate | null;

  @TypeGraphQL.Field(_type => CantidadSumAggregate, {
    nullable: true
  })
  _sum!: CantidadSumAggregate | null;

  @TypeGraphQL.Field(_type => CantidadMinAggregate, {
    nullable: true
  })
  _min!: CantidadMinAggregate | null;

  @TypeGraphQL.Field(_type => CantidadMaxAggregate, {
    nullable: true
  })
  _max!: CantidadMaxAggregate | null;
}

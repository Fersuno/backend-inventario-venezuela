import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PrecioVentaAvgAggregate } from "../outputs/PrecioVentaAvgAggregate";
import { PrecioVentaCountAggregate } from "../outputs/PrecioVentaCountAggregate";
import { PrecioVentaMaxAggregate } from "../outputs/PrecioVentaMaxAggregate";
import { PrecioVentaMinAggregate } from "../outputs/PrecioVentaMinAggregate";
import { PrecioVentaSumAggregate } from "../outputs/PrecioVentaSumAggregate";

@TypeGraphQL.ObjectType("AggregatePrecioVenta", {
  isAbstract: true
})
export class AggregatePrecioVenta {
  @TypeGraphQL.Field(_type => PrecioVentaCountAggregate, {
    nullable: true
  })
  _count!: PrecioVentaCountAggregate | null;

  @TypeGraphQL.Field(_type => PrecioVentaAvgAggregate, {
    nullable: true
  })
  _avg!: PrecioVentaAvgAggregate | null;

  @TypeGraphQL.Field(_type => PrecioVentaSumAggregate, {
    nullable: true
  })
  _sum!: PrecioVentaSumAggregate | null;

  @TypeGraphQL.Field(_type => PrecioVentaMinAggregate, {
    nullable: true
  })
  _min!: PrecioVentaMinAggregate | null;

  @TypeGraphQL.Field(_type => PrecioVentaMaxAggregate, {
    nullable: true
  })
  _max!: PrecioVentaMaxAggregate | null;
}

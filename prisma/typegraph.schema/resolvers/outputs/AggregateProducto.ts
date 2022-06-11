import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ProductoAvgAggregate } from "../outputs/ProductoAvgAggregate";
import { ProductoCountAggregate } from "../outputs/ProductoCountAggregate";
import { ProductoMaxAggregate } from "../outputs/ProductoMaxAggregate";
import { ProductoMinAggregate } from "../outputs/ProductoMinAggregate";
import { ProductoSumAggregate } from "../outputs/ProductoSumAggregate";

@TypeGraphQL.ObjectType("AggregateProducto", {
  isAbstract: true
})
export class AggregateProducto {
  @TypeGraphQL.Field(_type => ProductoCountAggregate, {
    nullable: true
  })
  _count!: ProductoCountAggregate | null;

  @TypeGraphQL.Field(_type => ProductoAvgAggregate, {
    nullable: true
  })
  _avg!: ProductoAvgAggregate | null;

  @TypeGraphQL.Field(_type => ProductoSumAggregate, {
    nullable: true
  })
  _sum!: ProductoSumAggregate | null;

  @TypeGraphQL.Field(_type => ProductoMinAggregate, {
    nullable: true
  })
  _min!: ProductoMinAggregate | null;

  @TypeGraphQL.Field(_type => ProductoMaxAggregate, {
    nullable: true
  })
  _max!: ProductoMaxAggregate | null;
}

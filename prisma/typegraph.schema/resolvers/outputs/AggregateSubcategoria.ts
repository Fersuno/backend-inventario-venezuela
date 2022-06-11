import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { SubcategoriaAvgAggregate } from "../outputs/SubcategoriaAvgAggregate";
import { SubcategoriaCountAggregate } from "../outputs/SubcategoriaCountAggregate";
import { SubcategoriaMaxAggregate } from "../outputs/SubcategoriaMaxAggregate";
import { SubcategoriaMinAggregate } from "../outputs/SubcategoriaMinAggregate";
import { SubcategoriaSumAggregate } from "../outputs/SubcategoriaSumAggregate";

@TypeGraphQL.ObjectType("AggregateSubcategoria", {
  isAbstract: true
})
export class AggregateSubcategoria {
  @TypeGraphQL.Field(_type => SubcategoriaCountAggregate, {
    nullable: true
  })
  _count!: SubcategoriaCountAggregate | null;

  @TypeGraphQL.Field(_type => SubcategoriaAvgAggregate, {
    nullable: true
  })
  _avg!: SubcategoriaAvgAggregate | null;

  @TypeGraphQL.Field(_type => SubcategoriaSumAggregate, {
    nullable: true
  })
  _sum!: SubcategoriaSumAggregate | null;

  @TypeGraphQL.Field(_type => SubcategoriaMinAggregate, {
    nullable: true
  })
  _min!: SubcategoriaMinAggregate | null;

  @TypeGraphQL.Field(_type => SubcategoriaMaxAggregate, {
    nullable: true
  })
  _max!: SubcategoriaMaxAggregate | null;
}

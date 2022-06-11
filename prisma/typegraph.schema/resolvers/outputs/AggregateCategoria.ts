import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { CategoriaAvgAggregate } from "../outputs/CategoriaAvgAggregate";
import { CategoriaCountAggregate } from "../outputs/CategoriaCountAggregate";
import { CategoriaMaxAggregate } from "../outputs/CategoriaMaxAggregate";
import { CategoriaMinAggregate } from "../outputs/CategoriaMinAggregate";
import { CategoriaSumAggregate } from "../outputs/CategoriaSumAggregate";

@TypeGraphQL.ObjectType("AggregateCategoria", {
  isAbstract: true
})
export class AggregateCategoria {
  @TypeGraphQL.Field(_type => CategoriaCountAggregate, {
    nullable: true
  })
  _count!: CategoriaCountAggregate | null;

  @TypeGraphQL.Field(_type => CategoriaAvgAggregate, {
    nullable: true
  })
  _avg!: CategoriaAvgAggregate | null;

  @TypeGraphQL.Field(_type => CategoriaSumAggregate, {
    nullable: true
  })
  _sum!: CategoriaSumAggregate | null;

  @TypeGraphQL.Field(_type => CategoriaMinAggregate, {
    nullable: true
  })
  _min!: CategoriaMinAggregate | null;

  @TypeGraphQL.Field(_type => CategoriaMaxAggregate, {
    nullable: true
  })
  _max!: CategoriaMaxAggregate | null;
}

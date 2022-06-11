import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { MarcaAvgAggregate } from "../outputs/MarcaAvgAggregate";
import { MarcaCountAggregate } from "../outputs/MarcaCountAggregate";
import { MarcaMaxAggregate } from "../outputs/MarcaMaxAggregate";
import { MarcaMinAggregate } from "../outputs/MarcaMinAggregate";
import { MarcaSumAggregate } from "../outputs/MarcaSumAggregate";

@TypeGraphQL.ObjectType("MarcaGroupBy", {
  isAbstract: true
})
export class MarcaGroupBy {
  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  id!: number;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  nombre!: string;

  @TypeGraphQL.Field(_type => MarcaCountAggregate, {
    nullable: true
  })
  _count!: MarcaCountAggregate | null;

  @TypeGraphQL.Field(_type => MarcaAvgAggregate, {
    nullable: true
  })
  _avg!: MarcaAvgAggregate | null;

  @TypeGraphQL.Field(_type => MarcaSumAggregate, {
    nullable: true
  })
  _sum!: MarcaSumAggregate | null;

  @TypeGraphQL.Field(_type => MarcaMinAggregate, {
    nullable: true
  })
  _min!: MarcaMinAggregate | null;

  @TypeGraphQL.Field(_type => MarcaMaxAggregate, {
    nullable: true
  })
  _max!: MarcaMaxAggregate | null;
}

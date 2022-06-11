import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { OrigenAvgOrderByAggregateInput } from "../inputs/OrigenAvgOrderByAggregateInput";
import { OrigenCountOrderByAggregateInput } from "../inputs/OrigenCountOrderByAggregateInput";
import { OrigenMaxOrderByAggregateInput } from "../inputs/OrigenMaxOrderByAggregateInput";
import { OrigenMinOrderByAggregateInput } from "../inputs/OrigenMinOrderByAggregateInput";
import { OrigenSumOrderByAggregateInput } from "../inputs/OrigenSumOrderByAggregateInput";
import { SortOrder } from "../../enums/SortOrder";

@TypeGraphQL.InputType("OrigenOrderByWithAggregationInput", {
  isAbstract: true
})
export class OrigenOrderByWithAggregationInput {
  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  id?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  nombre?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  porcentaje?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => OrigenCountOrderByAggregateInput, {
    nullable: true
  })
  _count?: OrigenCountOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => OrigenAvgOrderByAggregateInput, {
    nullable: true
  })
  _avg?: OrigenAvgOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => OrigenMaxOrderByAggregateInput, {
    nullable: true
  })
  _max?: OrigenMaxOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => OrigenMinOrderByAggregateInput, {
    nullable: true
  })
  _min?: OrigenMinOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => OrigenSumOrderByAggregateInput, {
    nullable: true
  })
  _sum?: OrigenSumOrderByAggregateInput | undefined;
}

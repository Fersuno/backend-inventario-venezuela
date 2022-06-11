import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { SedeAvgOrderByAggregateInput } from "../inputs/SedeAvgOrderByAggregateInput";
import { SedeCountOrderByAggregateInput } from "../inputs/SedeCountOrderByAggregateInput";
import { SedeMaxOrderByAggregateInput } from "../inputs/SedeMaxOrderByAggregateInput";
import { SedeMinOrderByAggregateInput } from "../inputs/SedeMinOrderByAggregateInput";
import { SedeSumOrderByAggregateInput } from "../inputs/SedeSumOrderByAggregateInput";
import { SortOrder } from "../../enums/SortOrder";

@TypeGraphQL.InputType("SedeOrderByWithAggregationInput", {
  isAbstract: true
})
export class SedeOrderByWithAggregationInput {
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
  estadoId?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SedeCountOrderByAggregateInput, {
    nullable: true
  })
  _count?: SedeCountOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => SedeAvgOrderByAggregateInput, {
    nullable: true
  })
  _avg?: SedeAvgOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => SedeMaxOrderByAggregateInput, {
    nullable: true
  })
  _max?: SedeMaxOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => SedeMinOrderByAggregateInput, {
    nullable: true
  })
  _min?: SedeMinOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => SedeSumOrderByAggregateInput, {
    nullable: true
  })
  _sum?: SedeSumOrderByAggregateInput | undefined;
}

import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { CantidadAvgOrderByAggregateInput } from "../inputs/CantidadAvgOrderByAggregateInput";
import { CantidadCountOrderByAggregateInput } from "../inputs/CantidadCountOrderByAggregateInput";
import { CantidadMaxOrderByAggregateInput } from "../inputs/CantidadMaxOrderByAggregateInput";
import { CantidadMinOrderByAggregateInput } from "../inputs/CantidadMinOrderByAggregateInput";
import { CantidadSumOrderByAggregateInput } from "../inputs/CantidadSumOrderByAggregateInput";
import { SortOrder } from "../../enums/SortOrder";

@TypeGraphQL.InputType("CantidadOrderByWithAggregationInput", {
  isAbstract: true
})
export class CantidadOrderByWithAggregationInput {
  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  id?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  cantidad?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  sedeId?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  productoId?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => CantidadCountOrderByAggregateInput, {
    nullable: true
  })
  _count?: CantidadCountOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => CantidadAvgOrderByAggregateInput, {
    nullable: true
  })
  _avg?: CantidadAvgOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => CantidadMaxOrderByAggregateInput, {
    nullable: true
  })
  _max?: CantidadMaxOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => CantidadMinOrderByAggregateInput, {
    nullable: true
  })
  _min?: CantidadMinOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => CantidadSumOrderByAggregateInput, {
    nullable: true
  })
  _sum?: CantidadSumOrderByAggregateInput | undefined;
}

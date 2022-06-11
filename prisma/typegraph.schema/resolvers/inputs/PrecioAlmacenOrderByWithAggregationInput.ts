import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PrecioAlmacenAvgOrderByAggregateInput } from "../inputs/PrecioAlmacenAvgOrderByAggregateInput";
import { PrecioAlmacenCountOrderByAggregateInput } from "../inputs/PrecioAlmacenCountOrderByAggregateInput";
import { PrecioAlmacenMaxOrderByAggregateInput } from "../inputs/PrecioAlmacenMaxOrderByAggregateInput";
import { PrecioAlmacenMinOrderByAggregateInput } from "../inputs/PrecioAlmacenMinOrderByAggregateInput";
import { PrecioAlmacenSumOrderByAggregateInput } from "../inputs/PrecioAlmacenSumOrderByAggregateInput";
import { SortOrder } from "../../enums/SortOrder";

@TypeGraphQL.InputType("PrecioAlmacenOrderByWithAggregationInput", {
  isAbstract: true
})
export class PrecioAlmacenOrderByWithAggregationInput {
  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  id?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  rmb?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  cif?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  mnj?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => PrecioAlmacenCountOrderByAggregateInput, {
    nullable: true
  })
  _count?: PrecioAlmacenCountOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => PrecioAlmacenAvgOrderByAggregateInput, {
    nullable: true
  })
  _avg?: PrecioAlmacenAvgOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => PrecioAlmacenMaxOrderByAggregateInput, {
    nullable: true
  })
  _max?: PrecioAlmacenMaxOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => PrecioAlmacenMinOrderByAggregateInput, {
    nullable: true
  })
  _min?: PrecioAlmacenMinOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => PrecioAlmacenSumOrderByAggregateInput, {
    nullable: true
  })
  _sum?: PrecioAlmacenSumOrderByAggregateInput | undefined;
}

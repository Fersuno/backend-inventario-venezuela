import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PrecioVentaAvgOrderByAggregateInput } from "../inputs/PrecioVentaAvgOrderByAggregateInput";
import { PrecioVentaCountOrderByAggregateInput } from "../inputs/PrecioVentaCountOrderByAggregateInput";
import { PrecioVentaMaxOrderByAggregateInput } from "../inputs/PrecioVentaMaxOrderByAggregateInput";
import { PrecioVentaMinOrderByAggregateInput } from "../inputs/PrecioVentaMinOrderByAggregateInput";
import { PrecioVentaSumOrderByAggregateInput } from "../inputs/PrecioVentaSumOrderByAggregateInput";
import { SortOrder } from "../../enums/SortOrder";

@TypeGraphQL.InputType("PrecioVentaOrderByWithAggregationInput", {
  isAbstract: true
})
export class PrecioVentaOrderByWithAggregationInput {
  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  id?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  a?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  aa?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  aaa?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  detal?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  instalacion?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => PrecioVentaCountOrderByAggregateInput, {
    nullable: true
  })
  _count?: PrecioVentaCountOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => PrecioVentaAvgOrderByAggregateInput, {
    nullable: true
  })
  _avg?: PrecioVentaAvgOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => PrecioVentaMaxOrderByAggregateInput, {
    nullable: true
  })
  _max?: PrecioVentaMaxOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => PrecioVentaMinOrderByAggregateInput, {
    nullable: true
  })
  _min?: PrecioVentaMinOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => PrecioVentaSumOrderByAggregateInput, {
    nullable: true
  })
  _sum?: PrecioVentaSumOrderByAggregateInput | undefined;
}

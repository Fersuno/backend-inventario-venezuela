import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { TrasladoAvgOrderByAggregateInput } from "../inputs/TrasladoAvgOrderByAggregateInput";
import { TrasladoCountOrderByAggregateInput } from "../inputs/TrasladoCountOrderByAggregateInput";
import { TrasladoMaxOrderByAggregateInput } from "../inputs/TrasladoMaxOrderByAggregateInput";
import { TrasladoMinOrderByAggregateInput } from "../inputs/TrasladoMinOrderByAggregateInput";
import { TrasladoSumOrderByAggregateInput } from "../inputs/TrasladoSumOrderByAggregateInput";
import { SortOrder } from "../../enums/SortOrder";

@TypeGraphQL.InputType("TrasladoOrderByWithAggregationInput", {
  isAbstract: true
})
export class TrasladoOrderByWithAggregationInput {
  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  id?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  confirmacion?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  fechaEnvio?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  fechaConfirmacion?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  sedeId?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  sedeOrigenId?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  sedeDestinoId?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => TrasladoCountOrderByAggregateInput, {
    nullable: true
  })
  _count?: TrasladoCountOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => TrasladoAvgOrderByAggregateInput, {
    nullable: true
  })
  _avg?: TrasladoAvgOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => TrasladoMaxOrderByAggregateInput, {
    nullable: true
  })
  _max?: TrasladoMaxOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => TrasladoMinOrderByAggregateInput, {
    nullable: true
  })
  _min?: TrasladoMinOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => TrasladoSumOrderByAggregateInput, {
    nullable: true
  })
  _sum?: TrasladoSumOrderByAggregateInput | undefined;
}

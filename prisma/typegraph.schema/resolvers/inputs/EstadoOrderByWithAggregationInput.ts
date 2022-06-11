import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { EstadoAvgOrderByAggregateInput } from "../inputs/EstadoAvgOrderByAggregateInput";
import { EstadoCountOrderByAggregateInput } from "../inputs/EstadoCountOrderByAggregateInput";
import { EstadoMaxOrderByAggregateInput } from "../inputs/EstadoMaxOrderByAggregateInput";
import { EstadoMinOrderByAggregateInput } from "../inputs/EstadoMinOrderByAggregateInput";
import { EstadoSumOrderByAggregateInput } from "../inputs/EstadoSumOrderByAggregateInput";
import { SortOrder } from "../../enums/SortOrder";

@TypeGraphQL.InputType("EstadoOrderByWithAggregationInput", {
  isAbstract: true
})
export class EstadoOrderByWithAggregationInput {
  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  id?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  nombre?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => EstadoCountOrderByAggregateInput, {
    nullable: true
  })
  _count?: EstadoCountOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => EstadoAvgOrderByAggregateInput, {
    nullable: true
  })
  _avg?: EstadoAvgOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => EstadoMaxOrderByAggregateInput, {
    nullable: true
  })
  _max?: EstadoMaxOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => EstadoMinOrderByAggregateInput, {
    nullable: true
  })
  _min?: EstadoMinOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => EstadoSumOrderByAggregateInput, {
    nullable: true
  })
  _sum?: EstadoSumOrderByAggregateInput | undefined;
}

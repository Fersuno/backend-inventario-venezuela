import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { MarcaAvgOrderByAggregateInput } from "../inputs/MarcaAvgOrderByAggregateInput";
import { MarcaCountOrderByAggregateInput } from "../inputs/MarcaCountOrderByAggregateInput";
import { MarcaMaxOrderByAggregateInput } from "../inputs/MarcaMaxOrderByAggregateInput";
import { MarcaMinOrderByAggregateInput } from "../inputs/MarcaMinOrderByAggregateInput";
import { MarcaSumOrderByAggregateInput } from "../inputs/MarcaSumOrderByAggregateInput";
import { SortOrder } from "../../enums/SortOrder";

@TypeGraphQL.InputType("MarcaOrderByWithAggregationInput", {
  isAbstract: true
})
export class MarcaOrderByWithAggregationInput {
  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  id?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  nombre?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => MarcaCountOrderByAggregateInput, {
    nullable: true
  })
  _count?: MarcaCountOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => MarcaAvgOrderByAggregateInput, {
    nullable: true
  })
  _avg?: MarcaAvgOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => MarcaMaxOrderByAggregateInput, {
    nullable: true
  })
  _max?: MarcaMaxOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => MarcaMinOrderByAggregateInput, {
    nullable: true
  })
  _min?: MarcaMinOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => MarcaSumOrderByAggregateInput, {
    nullable: true
  })
  _sum?: MarcaSumOrderByAggregateInput | undefined;
}

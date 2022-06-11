import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { CategoriaAvgOrderByAggregateInput } from "../inputs/CategoriaAvgOrderByAggregateInput";
import { CategoriaCountOrderByAggregateInput } from "../inputs/CategoriaCountOrderByAggregateInput";
import { CategoriaMaxOrderByAggregateInput } from "../inputs/CategoriaMaxOrderByAggregateInput";
import { CategoriaMinOrderByAggregateInput } from "../inputs/CategoriaMinOrderByAggregateInput";
import { CategoriaSumOrderByAggregateInput } from "../inputs/CategoriaSumOrderByAggregateInput";
import { SortOrder } from "../../enums/SortOrder";

@TypeGraphQL.InputType("CategoriaOrderByWithAggregationInput", {
  isAbstract: true
})
export class CategoriaOrderByWithAggregationInput {
  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  id?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  nombre?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => CategoriaCountOrderByAggregateInput, {
    nullable: true
  })
  _count?: CategoriaCountOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => CategoriaAvgOrderByAggregateInput, {
    nullable: true
  })
  _avg?: CategoriaAvgOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => CategoriaMaxOrderByAggregateInput, {
    nullable: true
  })
  _max?: CategoriaMaxOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => CategoriaMinOrderByAggregateInput, {
    nullable: true
  })
  _min?: CategoriaMinOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => CategoriaSumOrderByAggregateInput, {
    nullable: true
  })
  _sum?: CategoriaSumOrderByAggregateInput | undefined;
}

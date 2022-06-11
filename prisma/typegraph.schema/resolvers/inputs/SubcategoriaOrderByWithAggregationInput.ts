import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { SubcategoriaAvgOrderByAggregateInput } from "../inputs/SubcategoriaAvgOrderByAggregateInput";
import { SubcategoriaCountOrderByAggregateInput } from "../inputs/SubcategoriaCountOrderByAggregateInput";
import { SubcategoriaMaxOrderByAggregateInput } from "../inputs/SubcategoriaMaxOrderByAggregateInput";
import { SubcategoriaMinOrderByAggregateInput } from "../inputs/SubcategoriaMinOrderByAggregateInput";
import { SubcategoriaSumOrderByAggregateInput } from "../inputs/SubcategoriaSumOrderByAggregateInput";
import { SortOrder } from "../../enums/SortOrder";

@TypeGraphQL.InputType("SubcategoriaOrderByWithAggregationInput", {
  isAbstract: true
})
export class SubcategoriaOrderByWithAggregationInput {
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
  categoriaId?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SubcategoriaCountOrderByAggregateInput, {
    nullable: true
  })
  _count?: SubcategoriaCountOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => SubcategoriaAvgOrderByAggregateInput, {
    nullable: true
  })
  _avg?: SubcategoriaAvgOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => SubcategoriaMaxOrderByAggregateInput, {
    nullable: true
  })
  _max?: SubcategoriaMaxOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => SubcategoriaMinOrderByAggregateInput, {
    nullable: true
  })
  _min?: SubcategoriaMinOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => SubcategoriaSumOrderByAggregateInput, {
    nullable: true
  })
  _sum?: SubcategoriaSumOrderByAggregateInput | undefined;
}

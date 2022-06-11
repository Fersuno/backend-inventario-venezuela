import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ProductoAvgOrderByAggregateInput } from "../inputs/ProductoAvgOrderByAggregateInput";
import { ProductoCountOrderByAggregateInput } from "../inputs/ProductoCountOrderByAggregateInput";
import { ProductoMaxOrderByAggregateInput } from "../inputs/ProductoMaxOrderByAggregateInput";
import { ProductoMinOrderByAggregateInput } from "../inputs/ProductoMinOrderByAggregateInput";
import { ProductoSumOrderByAggregateInput } from "../inputs/ProductoSumOrderByAggregateInput";
import { SortOrder } from "../../enums/SortOrder";

@TypeGraphQL.InputType("ProductoOrderByWithAggregationInput", {
  isAbstract: true
})
export class ProductoOrderByWithAggregationInput {
  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  id?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  modelo?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  foto?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  cuenta?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  retirado?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  cantidad?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  marcaId?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  origenId?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  categoriaId?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  subcategoriaId?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  precioVentaId?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  precioAlmacenId?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => ProductoCountOrderByAggregateInput, {
    nullable: true
  })
  _count?: ProductoCountOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => ProductoAvgOrderByAggregateInput, {
    nullable: true
  })
  _avg?: ProductoAvgOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => ProductoMaxOrderByAggregateInput, {
    nullable: true
  })
  _max?: ProductoMaxOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => ProductoMinOrderByAggregateInput, {
    nullable: true
  })
  _min?: ProductoMinOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => ProductoSumOrderByAggregateInput, {
    nullable: true
  })
  _sum?: ProductoSumOrderByAggregateInput | undefined;
}

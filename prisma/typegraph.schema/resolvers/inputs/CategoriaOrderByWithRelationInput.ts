import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ProductoOrderByRelationAggregateInput } from "../inputs/ProductoOrderByRelationAggregateInput";
import { SubcategoriaOrderByRelationAggregateInput } from "../inputs/SubcategoriaOrderByRelationAggregateInput";
import { SortOrder } from "../../enums/SortOrder";

@TypeGraphQL.InputType("CategoriaOrderByWithRelationInput", {
  isAbstract: true
})
export class CategoriaOrderByWithRelationInput {
  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  id?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  nombre?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SubcategoriaOrderByRelationAggregateInput, {
    nullable: true
  })
  subcategoria?: SubcategoriaOrderByRelationAggregateInput | undefined;

  @TypeGraphQL.Field(_type => ProductoOrderByRelationAggregateInput, {
    nullable: true
  })
  producto?: ProductoOrderByRelationAggregateInput | undefined;
}

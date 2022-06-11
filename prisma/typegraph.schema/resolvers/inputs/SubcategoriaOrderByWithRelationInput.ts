import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { CategoriaOrderByWithRelationInput } from "../inputs/CategoriaOrderByWithRelationInput";
import { ProductoOrderByRelationAggregateInput } from "../inputs/ProductoOrderByRelationAggregateInput";
import { SortOrder } from "../../enums/SortOrder";

@TypeGraphQL.InputType("SubcategoriaOrderByWithRelationInput", {
  isAbstract: true
})
export class SubcategoriaOrderByWithRelationInput {
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

  @TypeGraphQL.Field(_type => CategoriaOrderByWithRelationInput, {
    nullable: true
  })
  categoria?: CategoriaOrderByWithRelationInput | undefined;

  @TypeGraphQL.Field(_type => ProductoOrderByRelationAggregateInput, {
    nullable: true
  })
  Producto?: ProductoOrderByRelationAggregateInput | undefined;
}

import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ProductoOrderByRelationAggregateInput } from "../inputs/ProductoOrderByRelationAggregateInput";
import { SortOrder } from "../../enums/SortOrder";

@TypeGraphQL.InputType("OrigenOrderByWithRelationInput", {
  isAbstract: true
})
export class OrigenOrderByWithRelationInput {
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
  porcentaje?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => ProductoOrderByRelationAggregateInput, {
    nullable: true
  })
  producto?: ProductoOrderByRelationAggregateInput | undefined;
}

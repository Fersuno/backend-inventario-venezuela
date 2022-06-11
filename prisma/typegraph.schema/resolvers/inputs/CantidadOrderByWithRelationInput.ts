import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ProductoOrderByWithRelationInput } from "../inputs/ProductoOrderByWithRelationInput";
import { SedeOrderByWithRelationInput } from "../inputs/SedeOrderByWithRelationInput";
import { SortOrder } from "../../enums/SortOrder";

@TypeGraphQL.InputType("CantidadOrderByWithRelationInput", {
  isAbstract: true
})
export class CantidadOrderByWithRelationInput {
  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  id?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  cantidad?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  sedeId?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  productoId?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SedeOrderByWithRelationInput, {
    nullable: true
  })
  sede?: SedeOrderByWithRelationInput | undefined;

  @TypeGraphQL.Field(_type => ProductoOrderByWithRelationInput, {
    nullable: true
  })
  producto?: ProductoOrderByWithRelationInput | undefined;
}

import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { IntWithAggregatesFilter } from "../inputs/IntWithAggregatesFilter";
import { StringWithAggregatesFilter } from "../inputs/StringWithAggregatesFilter";

@TypeGraphQL.InputType("SubcategoriaScalarWhereWithAggregatesInput", {
  isAbstract: true
})
export class SubcategoriaScalarWhereWithAggregatesInput {
  @TypeGraphQL.Field(_type => [SubcategoriaScalarWhereWithAggregatesInput], {
    nullable: true
  })
  AND?: SubcategoriaScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => [SubcategoriaScalarWhereWithAggregatesInput], {
    nullable: true
  })
  OR?: SubcategoriaScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => [SubcategoriaScalarWhereWithAggregatesInput], {
    nullable: true
  })
  NOT?: SubcategoriaScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => IntWithAggregatesFilter, {
    nullable: true
  })
  id?: IntWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => StringWithAggregatesFilter, {
    nullable: true
  })
  nombre?: StringWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => IntWithAggregatesFilter, {
    nullable: true
  })
  categoriaId?: IntWithAggregatesFilter | undefined;
}

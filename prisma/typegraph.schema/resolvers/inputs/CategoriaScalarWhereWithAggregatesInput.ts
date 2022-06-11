import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { IntWithAggregatesFilter } from "../inputs/IntWithAggregatesFilter";
import { StringWithAggregatesFilter } from "../inputs/StringWithAggregatesFilter";

@TypeGraphQL.InputType("CategoriaScalarWhereWithAggregatesInput", {
  isAbstract: true
})
export class CategoriaScalarWhereWithAggregatesInput {
  @TypeGraphQL.Field(_type => [CategoriaScalarWhereWithAggregatesInput], {
    nullable: true
  })
  AND?: CategoriaScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => [CategoriaScalarWhereWithAggregatesInput], {
    nullable: true
  })
  OR?: CategoriaScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => [CategoriaScalarWhereWithAggregatesInput], {
    nullable: true
  })
  NOT?: CategoriaScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => IntWithAggregatesFilter, {
    nullable: true
  })
  id?: IntWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => StringWithAggregatesFilter, {
    nullable: true
  })
  nombre?: StringWithAggregatesFilter | undefined;
}

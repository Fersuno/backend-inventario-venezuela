import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { IntWithAggregatesFilter } from "../inputs/IntWithAggregatesFilter";
import { StringWithAggregatesFilter } from "../inputs/StringWithAggregatesFilter";

@TypeGraphQL.InputType("OrigenScalarWhereWithAggregatesInput", {
  isAbstract: true
})
export class OrigenScalarWhereWithAggregatesInput {
  @TypeGraphQL.Field(_type => [OrigenScalarWhereWithAggregatesInput], {
    nullable: true
  })
  AND?: OrigenScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => [OrigenScalarWhereWithAggregatesInput], {
    nullable: true
  })
  OR?: OrigenScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => [OrigenScalarWhereWithAggregatesInput], {
    nullable: true
  })
  NOT?: OrigenScalarWhereWithAggregatesInput[] | undefined;

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
  porcentaje?: IntWithAggregatesFilter | undefined;
}

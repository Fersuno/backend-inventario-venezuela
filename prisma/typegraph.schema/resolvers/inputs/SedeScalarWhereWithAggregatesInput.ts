import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { IntWithAggregatesFilter } from "../inputs/IntWithAggregatesFilter";
import { StringWithAggregatesFilter } from "../inputs/StringWithAggregatesFilter";

@TypeGraphQL.InputType("SedeScalarWhereWithAggregatesInput", {
  isAbstract: true
})
export class SedeScalarWhereWithAggregatesInput {
  @TypeGraphQL.Field(_type => [SedeScalarWhereWithAggregatesInput], {
    nullable: true
  })
  AND?: SedeScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => [SedeScalarWhereWithAggregatesInput], {
    nullable: true
  })
  OR?: SedeScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => [SedeScalarWhereWithAggregatesInput], {
    nullable: true
  })
  NOT?: SedeScalarWhereWithAggregatesInput[] | undefined;

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
  estadoId?: IntWithAggregatesFilter | undefined;
}

import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { IntWithAggregatesFilter } from "../inputs/IntWithAggregatesFilter";
import { StringWithAggregatesFilter } from "../inputs/StringWithAggregatesFilter";

@TypeGraphQL.InputType("EstadoScalarWhereWithAggregatesInput", {
  isAbstract: true
})
export class EstadoScalarWhereWithAggregatesInput {
  @TypeGraphQL.Field(_type => [EstadoScalarWhereWithAggregatesInput], {
    nullable: true
  })
  AND?: EstadoScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => [EstadoScalarWhereWithAggregatesInput], {
    nullable: true
  })
  OR?: EstadoScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => [EstadoScalarWhereWithAggregatesInput], {
    nullable: true
  })
  NOT?: EstadoScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => IntWithAggregatesFilter, {
    nullable: true
  })
  id?: IntWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => StringWithAggregatesFilter, {
    nullable: true
  })
  nombre?: StringWithAggregatesFilter | undefined;
}

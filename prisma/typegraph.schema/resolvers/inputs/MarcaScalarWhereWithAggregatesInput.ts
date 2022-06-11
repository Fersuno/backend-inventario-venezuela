import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { IntWithAggregatesFilter } from "../inputs/IntWithAggregatesFilter";
import { StringWithAggregatesFilter } from "../inputs/StringWithAggregatesFilter";

@TypeGraphQL.InputType("MarcaScalarWhereWithAggregatesInput", {
  isAbstract: true
})
export class MarcaScalarWhereWithAggregatesInput {
  @TypeGraphQL.Field(_type => [MarcaScalarWhereWithAggregatesInput], {
    nullable: true
  })
  AND?: MarcaScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => [MarcaScalarWhereWithAggregatesInput], {
    nullable: true
  })
  OR?: MarcaScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => [MarcaScalarWhereWithAggregatesInput], {
    nullable: true
  })
  NOT?: MarcaScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => IntWithAggregatesFilter, {
    nullable: true
  })
  id?: IntWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => StringWithAggregatesFilter, {
    nullable: true
  })
  nombre?: StringWithAggregatesFilter | undefined;
}

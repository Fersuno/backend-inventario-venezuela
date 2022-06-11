import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { DecimalNullableWithAggregatesFilter } from "../inputs/DecimalNullableWithAggregatesFilter";
import { DecimalWithAggregatesFilter } from "../inputs/DecimalWithAggregatesFilter";
import { IntWithAggregatesFilter } from "../inputs/IntWithAggregatesFilter";

@TypeGraphQL.InputType("PrecioVentaScalarWhereWithAggregatesInput", {
  isAbstract: true
})
export class PrecioVentaScalarWhereWithAggregatesInput {
  @TypeGraphQL.Field(_type => [PrecioVentaScalarWhereWithAggregatesInput], {
    nullable: true
  })
  AND?: PrecioVentaScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => [PrecioVentaScalarWhereWithAggregatesInput], {
    nullable: true
  })
  OR?: PrecioVentaScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => [PrecioVentaScalarWhereWithAggregatesInput], {
    nullable: true
  })
  NOT?: PrecioVentaScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => IntWithAggregatesFilter, {
    nullable: true
  })
  id?: IntWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => DecimalWithAggregatesFilter, {
    nullable: true
  })
  a?: DecimalWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => DecimalNullableWithAggregatesFilter, {
    nullable: true
  })
  aa?: DecimalNullableWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => DecimalNullableWithAggregatesFilter, {
    nullable: true
  })
  aaa?: DecimalNullableWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => DecimalNullableWithAggregatesFilter, {
    nullable: true
  })
  detal?: DecimalNullableWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => DecimalNullableWithAggregatesFilter, {
    nullable: true
  })
  instalacion?: DecimalNullableWithAggregatesFilter | undefined;
}

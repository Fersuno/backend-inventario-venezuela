import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { DecimalNullableWithAggregatesFilter } from "../inputs/DecimalNullableWithAggregatesFilter";
import { DecimalWithAggregatesFilter } from "../inputs/DecimalWithAggregatesFilter";
import { IntWithAggregatesFilter } from "../inputs/IntWithAggregatesFilter";

@TypeGraphQL.InputType("PrecioAlmacenScalarWhereWithAggregatesInput", {
  isAbstract: true
})
export class PrecioAlmacenScalarWhereWithAggregatesInput {
  @TypeGraphQL.Field(_type => [PrecioAlmacenScalarWhereWithAggregatesInput], {
    nullable: true
  })
  AND?: PrecioAlmacenScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => [PrecioAlmacenScalarWhereWithAggregatesInput], {
    nullable: true
  })
  OR?: PrecioAlmacenScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => [PrecioAlmacenScalarWhereWithAggregatesInput], {
    nullable: true
  })
  NOT?: PrecioAlmacenScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => IntWithAggregatesFilter, {
    nullable: true
  })
  id?: IntWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => DecimalNullableWithAggregatesFilter, {
    nullable: true
  })
  rmb?: DecimalNullableWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => DecimalWithAggregatesFilter, {
    nullable: true
  })
  cif?: DecimalWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => DecimalNullableWithAggregatesFilter, {
    nullable: true
  })
  mnj?: DecimalNullableWithAggregatesFilter | undefined;
}

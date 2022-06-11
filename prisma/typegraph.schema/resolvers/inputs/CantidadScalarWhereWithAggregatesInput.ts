import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { IntWithAggregatesFilter } from "../inputs/IntWithAggregatesFilter";

@TypeGraphQL.InputType("CantidadScalarWhereWithAggregatesInput", {
  isAbstract: true
})
export class CantidadScalarWhereWithAggregatesInput {
  @TypeGraphQL.Field(_type => [CantidadScalarWhereWithAggregatesInput], {
    nullable: true
  })
  AND?: CantidadScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => [CantidadScalarWhereWithAggregatesInput], {
    nullable: true
  })
  OR?: CantidadScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => [CantidadScalarWhereWithAggregatesInput], {
    nullable: true
  })
  NOT?: CantidadScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => IntWithAggregatesFilter, {
    nullable: true
  })
  id?: IntWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => IntWithAggregatesFilter, {
    nullable: true
  })
  cantidad?: IntWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => IntWithAggregatesFilter, {
    nullable: true
  })
  sedeId?: IntWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => IntWithAggregatesFilter, {
    nullable: true
  })
  productoId?: IntWithAggregatesFilter | undefined;
}

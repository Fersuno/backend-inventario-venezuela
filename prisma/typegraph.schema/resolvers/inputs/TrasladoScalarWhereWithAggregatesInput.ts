import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { BoolWithAggregatesFilter } from "../inputs/BoolWithAggregatesFilter";
import { DateTimeWithAggregatesFilter } from "../inputs/DateTimeWithAggregatesFilter";
import { IntWithAggregatesFilter } from "../inputs/IntWithAggregatesFilter";

@TypeGraphQL.InputType("TrasladoScalarWhereWithAggregatesInput", {
  isAbstract: true
})
export class TrasladoScalarWhereWithAggregatesInput {
  @TypeGraphQL.Field(_type => [TrasladoScalarWhereWithAggregatesInput], {
    nullable: true
  })
  AND?: TrasladoScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => [TrasladoScalarWhereWithAggregatesInput], {
    nullable: true
  })
  OR?: TrasladoScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => [TrasladoScalarWhereWithAggregatesInput], {
    nullable: true
  })
  NOT?: TrasladoScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => IntWithAggregatesFilter, {
    nullable: true
  })
  id?: IntWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => BoolWithAggregatesFilter, {
    nullable: true
  })
  confirmacion?: BoolWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => DateTimeWithAggregatesFilter, {
    nullable: true
  })
  fechaEnvio?: DateTimeWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => DateTimeWithAggregatesFilter, {
    nullable: true
  })
  fechaConfirmacion?: DateTimeWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => IntWithAggregatesFilter, {
    nullable: true
  })
  sedeId?: IntWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => IntWithAggregatesFilter, {
    nullable: true
  })
  sedeOrigenId?: IntWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => IntWithAggregatesFilter, {
    nullable: true
  })
  sedeDestinoId?: IntWithAggregatesFilter | undefined;
}

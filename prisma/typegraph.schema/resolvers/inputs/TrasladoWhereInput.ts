import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { BoolFilter } from "../inputs/BoolFilter";
import { DateTimeFilter } from "../inputs/DateTimeFilter";
import { IntFilter } from "../inputs/IntFilter";
import { SedeRelationFilter } from "../inputs/SedeRelationFilter";

@TypeGraphQL.InputType("TrasladoWhereInput", {
  isAbstract: true
})
export class TrasladoWhereInput {
  @TypeGraphQL.Field(_type => [TrasladoWhereInput], {
    nullable: true
  })
  AND?: TrasladoWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [TrasladoWhereInput], {
    nullable: true
  })
  OR?: TrasladoWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [TrasladoWhereInput], {
    nullable: true
  })
  NOT?: TrasladoWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => IntFilter, {
    nullable: true
  })
  id?: IntFilter | undefined;

  @TypeGraphQL.Field(_type => BoolFilter, {
    nullable: true
  })
  confirmacion?: BoolFilter | undefined;

  @TypeGraphQL.Field(_type => DateTimeFilter, {
    nullable: true
  })
  fechaEnvio?: DateTimeFilter | undefined;

  @TypeGraphQL.Field(_type => DateTimeFilter, {
    nullable: true
  })
  fechaConfirmacion?: DateTimeFilter | undefined;

  @TypeGraphQL.Field(_type => IntFilter, {
    nullable: true
  })
  sedeId?: IntFilter | undefined;

  @TypeGraphQL.Field(_type => IntFilter, {
    nullable: true
  })
  sedeOrigenId?: IntFilter | undefined;

  @TypeGraphQL.Field(_type => IntFilter, {
    nullable: true
  })
  sedeDestinoId?: IntFilter | undefined;

  @TypeGraphQL.Field(_type => SedeRelationFilter, {
    nullable: true
  })
  sede?: SedeRelationFilter | undefined;

  @TypeGraphQL.Field(_type => SedeRelationFilter, {
    nullable: true
  })
  sedeOrigen?: SedeRelationFilter | undefined;

  @TypeGraphQL.Field(_type => SedeRelationFilter, {
    nullable: true
  })
  sedeDestino?: SedeRelationFilter | undefined;
}

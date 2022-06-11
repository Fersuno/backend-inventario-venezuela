import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { BoolFilter } from "../inputs/BoolFilter";
import { DateTimeFilter } from "../inputs/DateTimeFilter";
import { IntFilter } from "../inputs/IntFilter";

@TypeGraphQL.InputType("TrasladoScalarWhereInput", {
  isAbstract: true
})
export class TrasladoScalarWhereInput {
  @TypeGraphQL.Field(_type => [TrasladoScalarWhereInput], {
    nullable: true
  })
  AND?: TrasladoScalarWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [TrasladoScalarWhereInput], {
    nullable: true
  })
  OR?: TrasladoScalarWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [TrasladoScalarWhereInput], {
    nullable: true
  })
  NOT?: TrasladoScalarWhereInput[] | undefined;

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
}

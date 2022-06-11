import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { IntFilter } from "../inputs/IntFilter";
import { StringFilter } from "../inputs/StringFilter";

@TypeGraphQL.InputType("SedeScalarWhereInput", {
  isAbstract: true
})
export class SedeScalarWhereInput {
  @TypeGraphQL.Field(_type => [SedeScalarWhereInput], {
    nullable: true
  })
  AND?: SedeScalarWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [SedeScalarWhereInput], {
    nullable: true
  })
  OR?: SedeScalarWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [SedeScalarWhereInput], {
    nullable: true
  })
  NOT?: SedeScalarWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => IntFilter, {
    nullable: true
  })
  id?: IntFilter | undefined;

  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true
  })
  nombre?: StringFilter | undefined;

  @TypeGraphQL.Field(_type => IntFilter, {
    nullable: true
  })
  estadoId?: IntFilter | undefined;
}

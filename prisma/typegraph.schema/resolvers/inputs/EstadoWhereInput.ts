import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { IntFilter } from "../inputs/IntFilter";
import { SedeListRelationFilter } from "../inputs/SedeListRelationFilter";
import { StringFilter } from "../inputs/StringFilter";

@TypeGraphQL.InputType("EstadoWhereInput", {
  isAbstract: true
})
export class EstadoWhereInput {
  @TypeGraphQL.Field(_type => [EstadoWhereInput], {
    nullable: true
  })
  AND?: EstadoWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [EstadoWhereInput], {
    nullable: true
  })
  OR?: EstadoWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [EstadoWhereInput], {
    nullable: true
  })
  NOT?: EstadoWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => IntFilter, {
    nullable: true
  })
  id?: IntFilter | undefined;

  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true
  })
  nombre?: StringFilter | undefined;

  @TypeGraphQL.Field(_type => SedeListRelationFilter, {
    nullable: true
  })
  sedes?: SedeListRelationFilter | undefined;
}

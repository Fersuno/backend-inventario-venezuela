import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { EstadoWhereInput } from "../inputs/EstadoWhereInput";

@TypeGraphQL.InputType("EstadoRelationFilter", {
  isAbstract: true
})
export class EstadoRelationFilter {
  @TypeGraphQL.Field(_type => EstadoWhereInput, {
    nullable: true
  })
  is?: EstadoWhereInput | undefined;

  @TypeGraphQL.Field(_type => EstadoWhereInput, {
    nullable: true
  })
  isNot?: EstadoWhereInput | undefined;
}

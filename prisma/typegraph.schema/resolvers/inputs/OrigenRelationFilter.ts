import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { OrigenWhereInput } from "../inputs/OrigenWhereInput";

@TypeGraphQL.InputType("OrigenRelationFilter", {
  isAbstract: true
})
export class OrigenRelationFilter {
  @TypeGraphQL.Field(_type => OrigenWhereInput, {
    nullable: true
  })
  is?: OrigenWhereInput | undefined;

  @TypeGraphQL.Field(_type => OrigenWhereInput, {
    nullable: true
  })
  isNot?: OrigenWhereInput | undefined;
}

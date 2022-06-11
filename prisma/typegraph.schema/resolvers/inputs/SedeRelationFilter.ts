import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { SedeWhereInput } from "../inputs/SedeWhereInput";

@TypeGraphQL.InputType("SedeRelationFilter", {
  isAbstract: true
})
export class SedeRelationFilter {
  @TypeGraphQL.Field(_type => SedeWhereInput, {
    nullable: true
  })
  is?: SedeWhereInput | undefined;

  @TypeGraphQL.Field(_type => SedeWhereInput, {
    nullable: true
  })
  isNot?: SedeWhereInput | undefined;
}

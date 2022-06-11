import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { SedeWhereInput } from "../inputs/SedeWhereInput";

@TypeGraphQL.InputType("SedeListRelationFilter", {
  isAbstract: true
})
export class SedeListRelationFilter {
  @TypeGraphQL.Field(_type => SedeWhereInput, {
    nullable: true
  })
  every?: SedeWhereInput | undefined;

  @TypeGraphQL.Field(_type => SedeWhereInput, {
    nullable: true
  })
  some?: SedeWhereInput | undefined;

  @TypeGraphQL.Field(_type => SedeWhereInput, {
    nullable: true
  })
  none?: SedeWhereInput | undefined;
}

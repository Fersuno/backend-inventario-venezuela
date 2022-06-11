import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { TrasladoWhereInput } from "../inputs/TrasladoWhereInput";

@TypeGraphQL.InputType("TrasladoListRelationFilter", {
  isAbstract: true
})
export class TrasladoListRelationFilter {
  @TypeGraphQL.Field(_type => TrasladoWhereInput, {
    nullable: true
  })
  every?: TrasladoWhereInput | undefined;

  @TypeGraphQL.Field(_type => TrasladoWhereInput, {
    nullable: true
  })
  some?: TrasladoWhereInput | undefined;

  @TypeGraphQL.Field(_type => TrasladoWhereInput, {
    nullable: true
  })
  none?: TrasladoWhereInput | undefined;
}

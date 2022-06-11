import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { MarcaWhereInput } from "../inputs/MarcaWhereInput";

@TypeGraphQL.InputType("MarcaRelationFilter", {
  isAbstract: true
})
export class MarcaRelationFilter {
  @TypeGraphQL.Field(_type => MarcaWhereInput, {
    nullable: true
  })
  is?: MarcaWhereInput | undefined;

  @TypeGraphQL.Field(_type => MarcaWhereInput, {
    nullable: true
  })
  isNot?: MarcaWhereInput | undefined;
}

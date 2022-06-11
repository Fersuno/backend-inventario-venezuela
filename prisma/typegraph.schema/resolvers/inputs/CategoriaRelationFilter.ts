import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { CategoriaWhereInput } from "../inputs/CategoriaWhereInput";

@TypeGraphQL.InputType("CategoriaRelationFilter", {
  isAbstract: true
})
export class CategoriaRelationFilter {
  @TypeGraphQL.Field(_type => CategoriaWhereInput, {
    nullable: true
  })
  is?: CategoriaWhereInput | undefined;

  @TypeGraphQL.Field(_type => CategoriaWhereInput, {
    nullable: true
  })
  isNot?: CategoriaWhereInput | undefined;
}

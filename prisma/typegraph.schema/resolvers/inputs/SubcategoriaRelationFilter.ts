import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { SubcategoriaWhereInput } from "../inputs/SubcategoriaWhereInput";

@TypeGraphQL.InputType("SubcategoriaRelationFilter", {
  isAbstract: true
})
export class SubcategoriaRelationFilter {
  @TypeGraphQL.Field(_type => SubcategoriaWhereInput, {
    nullable: true
  })
  is?: SubcategoriaWhereInput | undefined;

  @TypeGraphQL.Field(_type => SubcategoriaWhereInput, {
    nullable: true
  })
  isNot?: SubcategoriaWhereInput | undefined;
}

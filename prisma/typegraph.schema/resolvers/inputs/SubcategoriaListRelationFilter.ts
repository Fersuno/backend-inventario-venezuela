import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { SubcategoriaWhereInput } from "../inputs/SubcategoriaWhereInput";

@TypeGraphQL.InputType("SubcategoriaListRelationFilter", {
  isAbstract: true
})
export class SubcategoriaListRelationFilter {
  @TypeGraphQL.Field(_type => SubcategoriaWhereInput, {
    nullable: true
  })
  every?: SubcategoriaWhereInput | undefined;

  @TypeGraphQL.Field(_type => SubcategoriaWhereInput, {
    nullable: true
  })
  some?: SubcategoriaWhereInput | undefined;

  @TypeGraphQL.Field(_type => SubcategoriaWhereInput, {
    nullable: true
  })
  none?: SubcategoriaWhereInput | undefined;
}

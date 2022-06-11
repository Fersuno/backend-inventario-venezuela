import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ProductoWhereInput } from "../inputs/ProductoWhereInput";

@TypeGraphQL.InputType("ProductoRelationFilter", {
  isAbstract: true
})
export class ProductoRelationFilter {
  @TypeGraphQL.Field(_type => ProductoWhereInput, {
    nullable: true
  })
  is?: ProductoWhereInput | undefined;

  @TypeGraphQL.Field(_type => ProductoWhereInput, {
    nullable: true
  })
  isNot?: ProductoWhereInput | undefined;
}

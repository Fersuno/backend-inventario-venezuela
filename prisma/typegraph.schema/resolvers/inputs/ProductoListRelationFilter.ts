import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ProductoWhereInput } from "../inputs/ProductoWhereInput";

@TypeGraphQL.InputType("ProductoListRelationFilter", {
  isAbstract: true
})
export class ProductoListRelationFilter {
  @TypeGraphQL.Field(_type => ProductoWhereInput, {
    nullable: true
  })
  every?: ProductoWhereInput | undefined;

  @TypeGraphQL.Field(_type => ProductoWhereInput, {
    nullable: true
  })
  some?: ProductoWhereInput | undefined;

  @TypeGraphQL.Field(_type => ProductoWhereInput, {
    nullable: true
  })
  none?: ProductoWhereInput | undefined;
}

import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PrecioAlmacenWhereInput } from "../inputs/PrecioAlmacenWhereInput";

@TypeGraphQL.InputType("PrecioAlmacenRelationFilter", {
  isAbstract: true
})
export class PrecioAlmacenRelationFilter {
  @TypeGraphQL.Field(_type => PrecioAlmacenWhereInput, {
    nullable: true
  })
  is?: PrecioAlmacenWhereInput | undefined;

  @TypeGraphQL.Field(_type => PrecioAlmacenWhereInput, {
    nullable: true
  })
  isNot?: PrecioAlmacenWhereInput | undefined;
}

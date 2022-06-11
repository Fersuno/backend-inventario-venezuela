import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PrecioVentaWhereInput } from "../inputs/PrecioVentaWhereInput";

@TypeGraphQL.InputType("PrecioVentaRelationFilter", {
  isAbstract: true
})
export class PrecioVentaRelationFilter {
  @TypeGraphQL.Field(_type => PrecioVentaWhereInput, {
    nullable: true
  })
  is?: PrecioVentaWhereInput | undefined;

  @TypeGraphQL.Field(_type => PrecioVentaWhereInput, {
    nullable: true
  })
  isNot?: PrecioVentaWhereInput | undefined;
}

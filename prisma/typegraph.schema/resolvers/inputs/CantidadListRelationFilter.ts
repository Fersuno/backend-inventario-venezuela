import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { CantidadWhereInput } from "../inputs/CantidadWhereInput";

@TypeGraphQL.InputType("CantidadListRelationFilter", {
  isAbstract: true
})
export class CantidadListRelationFilter {
  @TypeGraphQL.Field(_type => CantidadWhereInput, {
    nullable: true
  })
  every?: CantidadWhereInput | undefined;

  @TypeGraphQL.Field(_type => CantidadWhereInput, {
    nullable: true
  })
  some?: CantidadWhereInput | undefined;

  @TypeGraphQL.Field(_type => CantidadWhereInput, {
    nullable: true
  })
  none?: CantidadWhereInput | undefined;
}

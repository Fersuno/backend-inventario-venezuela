import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { DecimalFilter } from "../inputs/DecimalFilter";
import { DecimalNullableFilter } from "../inputs/DecimalNullableFilter";
import { IntFilter } from "../inputs/IntFilter";
import { ProductoListRelationFilter } from "../inputs/ProductoListRelationFilter";

@TypeGraphQL.InputType("PrecioAlmacenWhereInput", {
  isAbstract: true
})
export class PrecioAlmacenWhereInput {
  @TypeGraphQL.Field(_type => [PrecioAlmacenWhereInput], {
    nullable: true
  })
  AND?: PrecioAlmacenWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [PrecioAlmacenWhereInput], {
    nullable: true
  })
  OR?: PrecioAlmacenWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [PrecioAlmacenWhereInput], {
    nullable: true
  })
  NOT?: PrecioAlmacenWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => IntFilter, {
    nullable: true
  })
  id?: IntFilter | undefined;

  @TypeGraphQL.Field(_type => DecimalNullableFilter, {
    nullable: true
  })
  rmb?: DecimalNullableFilter | undefined;

  @TypeGraphQL.Field(_type => DecimalFilter, {
    nullable: true
  })
  cif?: DecimalFilter | undefined;

  @TypeGraphQL.Field(_type => DecimalNullableFilter, {
    nullable: true
  })
  mnj?: DecimalNullableFilter | undefined;

  @TypeGraphQL.Field(_type => ProductoListRelationFilter, {
    nullable: true
  })
  producto?: ProductoListRelationFilter | undefined;
}

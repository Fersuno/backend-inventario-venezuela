import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { DecimalFilter } from "../inputs/DecimalFilter";
import { DecimalNullableFilter } from "../inputs/DecimalNullableFilter";
import { IntFilter } from "../inputs/IntFilter";
import { ProductoListRelationFilter } from "../inputs/ProductoListRelationFilter";

@TypeGraphQL.InputType("PrecioVentaWhereInput", {
  isAbstract: true
})
export class PrecioVentaWhereInput {
  @TypeGraphQL.Field(_type => [PrecioVentaWhereInput], {
    nullable: true
  })
  AND?: PrecioVentaWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [PrecioVentaWhereInput], {
    nullable: true
  })
  OR?: PrecioVentaWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [PrecioVentaWhereInput], {
    nullable: true
  })
  NOT?: PrecioVentaWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => IntFilter, {
    nullable: true
  })
  id?: IntFilter | undefined;

  @TypeGraphQL.Field(_type => DecimalFilter, {
    nullable: true
  })
  a?: DecimalFilter | undefined;

  @TypeGraphQL.Field(_type => DecimalNullableFilter, {
    nullable: true
  })
  aa?: DecimalNullableFilter | undefined;

  @TypeGraphQL.Field(_type => DecimalNullableFilter, {
    nullable: true
  })
  aaa?: DecimalNullableFilter | undefined;

  @TypeGraphQL.Field(_type => DecimalNullableFilter, {
    nullable: true
  })
  detal?: DecimalNullableFilter | undefined;

  @TypeGraphQL.Field(_type => DecimalNullableFilter, {
    nullable: true
  })
  instalacion?: DecimalNullableFilter | undefined;

  @TypeGraphQL.Field(_type => ProductoListRelationFilter, {
    nullable: true
  })
  producto?: ProductoListRelationFilter | undefined;
}

import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { BoolFilter } from "../inputs/BoolFilter";
import { CantidadListRelationFilter } from "../inputs/CantidadListRelationFilter";
import { CategoriaRelationFilter } from "../inputs/CategoriaRelationFilter";
import { IntFilter } from "../inputs/IntFilter";
import { IntNullableFilter } from "../inputs/IntNullableFilter";
import { MarcaRelationFilter } from "../inputs/MarcaRelationFilter";
import { OrigenRelationFilter } from "../inputs/OrigenRelationFilter";
import { PrecioAlmacenRelationFilter } from "../inputs/PrecioAlmacenRelationFilter";
import { PrecioVentaRelationFilter } from "../inputs/PrecioVentaRelationFilter";
import { StringFilter } from "../inputs/StringFilter";
import { StringNullableFilter } from "../inputs/StringNullableFilter";
import { SubcategoriaRelationFilter } from "../inputs/SubcategoriaRelationFilter";

@TypeGraphQL.InputType("ProductoWhereInput", {
  isAbstract: true
})
export class ProductoWhereInput {
  @TypeGraphQL.Field(_type => [ProductoWhereInput], {
    nullable: true
  })
  AND?: ProductoWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [ProductoWhereInput], {
    nullable: true
  })
  OR?: ProductoWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [ProductoWhereInput], {
    nullable: true
  })
  NOT?: ProductoWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => IntFilter, {
    nullable: true
  })
  id?: IntFilter | undefined;

  @TypeGraphQL.Field(_type => StringNullableFilter, {
    nullable: true
  })
  modelo?: StringNullableFilter | undefined;

  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true
  })
  foto?: StringFilter | undefined;

  @TypeGraphQL.Field(_type => BoolFilter, {
    nullable: true
  })
  cuenta?: BoolFilter | undefined;

  @TypeGraphQL.Field(_type => BoolFilter, {
    nullable: true
  })
  retirado?: BoolFilter | undefined;

  @TypeGraphQL.Field(_type => IntFilter, {
    nullable: true
  })
  cantidad?: IntFilter | undefined;

  @TypeGraphQL.Field(_type => IntNullableFilter, {
    nullable: true
  })
  marcaId?: IntNullableFilter | undefined;

  @TypeGraphQL.Field(_type => IntFilter, {
    nullable: true
  })
  origenId?: IntFilter | undefined;

  @TypeGraphQL.Field(_type => IntFilter, {
    nullable: true
  })
  categoriaId?: IntFilter | undefined;

  @TypeGraphQL.Field(_type => IntNullableFilter, {
    nullable: true
  })
  subcategoriaId?: IntNullableFilter | undefined;

  @TypeGraphQL.Field(_type => IntFilter, {
    nullable: true
  })
  precioVentaId?: IntFilter | undefined;

  @TypeGraphQL.Field(_type => IntFilter, {
    nullable: true
  })
  precioAlmacenId?: IntFilter | undefined;

  @TypeGraphQL.Field(_type => CantidadListRelationFilter, {
    nullable: true
  })
  Cantidad?: CantidadListRelationFilter | undefined;

  @TypeGraphQL.Field(_type => MarcaRelationFilter, {
    nullable: true
  })
  marca?: MarcaRelationFilter | undefined;

  @TypeGraphQL.Field(_type => OrigenRelationFilter, {
    nullable: true
  })
  origen?: OrigenRelationFilter | undefined;

  @TypeGraphQL.Field(_type => CategoriaRelationFilter, {
    nullable: true
  })
  categoria?: CategoriaRelationFilter | undefined;

  @TypeGraphQL.Field(_type => SubcategoriaRelationFilter, {
    nullable: true
  })
  subcategoria?: SubcategoriaRelationFilter | undefined;

  @TypeGraphQL.Field(_type => PrecioVentaRelationFilter, {
    nullable: true
  })
  precioVenta?: PrecioVentaRelationFilter | undefined;

  @TypeGraphQL.Field(_type => PrecioAlmacenRelationFilter, {
    nullable: true
  })
  precioAlmacen?: PrecioAlmacenRelationFilter | undefined;
}

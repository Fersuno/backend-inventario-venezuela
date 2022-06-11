import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { CantidadOrderByRelationAggregateInput } from "../inputs/CantidadOrderByRelationAggregateInput";
import { CategoriaOrderByWithRelationInput } from "../inputs/CategoriaOrderByWithRelationInput";
import { MarcaOrderByWithRelationInput } from "../inputs/MarcaOrderByWithRelationInput";
import { OrigenOrderByWithRelationInput } from "../inputs/OrigenOrderByWithRelationInput";
import { PrecioAlmacenOrderByWithRelationInput } from "../inputs/PrecioAlmacenOrderByWithRelationInput";
import { PrecioVentaOrderByWithRelationInput } from "../inputs/PrecioVentaOrderByWithRelationInput";
import { SubcategoriaOrderByWithRelationInput } from "../inputs/SubcategoriaOrderByWithRelationInput";
import { SortOrder } from "../../enums/SortOrder";

@TypeGraphQL.InputType("ProductoOrderByWithRelationInput", {
  isAbstract: true
})
export class ProductoOrderByWithRelationInput {
  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  id?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  modelo?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  foto?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  cuenta?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  retirado?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  cantidad?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  marcaId?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  origenId?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  categoriaId?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  subcategoriaId?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  precioVentaId?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  precioAlmacenId?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => CantidadOrderByRelationAggregateInput, {
    nullable: true
  })
  Cantidad?: CantidadOrderByRelationAggregateInput | undefined;

  @TypeGraphQL.Field(_type => MarcaOrderByWithRelationInput, {
    nullable: true
  })
  marca?: MarcaOrderByWithRelationInput | undefined;

  @TypeGraphQL.Field(_type => OrigenOrderByWithRelationInput, {
    nullable: true
  })
  origen?: OrigenOrderByWithRelationInput | undefined;

  @TypeGraphQL.Field(_type => CategoriaOrderByWithRelationInput, {
    nullable: true
  })
  categoria?: CategoriaOrderByWithRelationInput | undefined;

  @TypeGraphQL.Field(_type => SubcategoriaOrderByWithRelationInput, {
    nullable: true
  })
  subcategoria?: SubcategoriaOrderByWithRelationInput | undefined;

  @TypeGraphQL.Field(_type => PrecioVentaOrderByWithRelationInput, {
    nullable: true
  })
  precioVenta?: PrecioVentaOrderByWithRelationInput | undefined;

  @TypeGraphQL.Field(_type => PrecioAlmacenOrderByWithRelationInput, {
    nullable: true
  })
  precioAlmacen?: PrecioAlmacenOrderByWithRelationInput | undefined;
}

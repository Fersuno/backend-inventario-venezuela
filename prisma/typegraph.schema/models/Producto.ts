import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../scalars";
import { Cantidad } from "../models/Cantidad";
import { Categoria } from "../models/Categoria";
import { Marca } from "../models/Marca";
import { Origen } from "../models/Origen";
import { PrecioAlmacen } from "../models/PrecioAlmacen";
import { PrecioVenta } from "../models/PrecioVenta";
import { Subcategoria } from "../models/Subcategoria";
import { ProductoCount } from "../resolvers/outputs/ProductoCount";

@TypeGraphQL.ObjectType("Producto", {
  isAbstract: true
})
export class Producto {
  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  id!: number;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  modelo?: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  foto!: string;

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: false
  })
  cuenta!: boolean;

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: false
  })
  retirado!: boolean;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  cantidad!: number;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  marcaId?: number | null;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  origenId!: number;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  categoriaId!: number;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  subcategoriaId?: number | null;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  precioVentaId!: number;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  precioAlmacenId!: number;

  Cantidad?: Cantidad[];

  marca?: Marca | null;

  origen?: Origen;

  categoria?: Categoria;

  subcategoria?: Subcategoria | null;

  precioVenta?: PrecioVenta;

  precioAlmacen?: PrecioAlmacen;

  @TypeGraphQL.Field(_type => ProductoCount, {
    nullable: true
  })
  _count?: ProductoCount | null;
}

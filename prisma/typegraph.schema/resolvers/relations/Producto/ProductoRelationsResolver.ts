import * as TypeGraphQL from "type-graphql";
import { Cantidad } from "../../../models/Cantidad";
import { Categoria } from "../../../models/Categoria";
import { Marca } from "../../../models/Marca";
import { Origen } from "../../../models/Origen";
import { PrecioAlmacen } from "../../../models/PrecioAlmacen";
import { PrecioVenta } from "../../../models/PrecioVenta";
import { Producto } from "../../../models/Producto";
import { Subcategoria } from "../../../models/Subcategoria";
import { ProductoCantidadArgs } from "./args/ProductoCantidadArgs";
import { transformFields, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => Producto)
export class ProductoRelationsResolver {
  @TypeGraphQL.FieldResolver(_type => [Cantidad], {
    nullable: false
  })
  async Cantidad(@TypeGraphQL.Root() producto: Producto, @TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: ProductoCantidadArgs): Promise<Cantidad[]> {
    return getPrismaFromContext(ctx).producto.findUnique({
      where: {
        id: producto.id,
      },
    }).Cantidad(args);
  }

  @TypeGraphQL.FieldResolver(_type => Marca, {
    nullable: true
  })
  async marca(@TypeGraphQL.Root() producto: Producto, @TypeGraphQL.Ctx() ctx: any): Promise<Marca | null> {
    return getPrismaFromContext(ctx).producto.findUnique({
      where: {
        id: producto.id,
      },
    }).marca({});
  }

  @TypeGraphQL.FieldResolver(_type => Origen, {
    nullable: false
  })
  async origen(@TypeGraphQL.Root() producto: Producto, @TypeGraphQL.Ctx() ctx: any): Promise<Origen> {
    return getPrismaFromContext(ctx).producto.findUnique({
      where: {
        id: producto.id,
      },
    }).origen({});
  }

  @TypeGraphQL.FieldResolver(_type => Categoria, {
    nullable: false
  })
  async categoria(@TypeGraphQL.Root() producto: Producto, @TypeGraphQL.Ctx() ctx: any): Promise<Categoria> {
    return getPrismaFromContext(ctx).producto.findUnique({
      where: {
        id: producto.id,
      },
    }).categoria({});
  }

  @TypeGraphQL.FieldResolver(_type => Subcategoria, {
    nullable: true
  })
  async subcategoria(@TypeGraphQL.Root() producto: Producto, @TypeGraphQL.Ctx() ctx: any): Promise<Subcategoria | null> {
    return getPrismaFromContext(ctx).producto.findUnique({
      where: {
        id: producto.id,
      },
    }).subcategoria({});
  }

  @TypeGraphQL.FieldResolver(_type => PrecioVenta, {
    nullable: false
  })
  async precioVenta(@TypeGraphQL.Root() producto: Producto, @TypeGraphQL.Ctx() ctx: any): Promise<PrecioVenta> {
    return getPrismaFromContext(ctx).producto.findUnique({
      where: {
        id: producto.id,
      },
    }).precioVenta({});
  }

  @TypeGraphQL.FieldResolver(_type => PrecioAlmacen, {
    nullable: false
  })
  async precioAlmacen(@TypeGraphQL.Root() producto: Producto, @TypeGraphQL.Ctx() ctx: any): Promise<PrecioAlmacen> {
    return getPrismaFromContext(ctx).producto.findUnique({
      where: {
        id: producto.id,
      },
    }).precioAlmacen({});
  }
}

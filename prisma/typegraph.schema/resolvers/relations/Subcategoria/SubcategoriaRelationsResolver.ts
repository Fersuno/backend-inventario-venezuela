import * as TypeGraphQL from "type-graphql";
import { Categoria } from "../../../models/Categoria";
import { Producto } from "../../../models/Producto";
import { Subcategoria } from "../../../models/Subcategoria";
import { SubcategoriaProductoArgs } from "./args/SubcategoriaProductoArgs";
import { transformFields, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => Subcategoria)
export class SubcategoriaRelationsResolver {
  @TypeGraphQL.FieldResolver(_type => Categoria, {
    nullable: false
  })
  async categoria(@TypeGraphQL.Root() subcategoria: Subcategoria, @TypeGraphQL.Ctx() ctx: any): Promise<Categoria> {
    return getPrismaFromContext(ctx).subcategoria.findUnique({
      where: {
        id: subcategoria.id,
      },
    }).categoria({});
  }

  @TypeGraphQL.FieldResolver(_type => [Producto], {
    nullable: false
  })
  async Producto(@TypeGraphQL.Root() subcategoria: Subcategoria, @TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: SubcategoriaProductoArgs): Promise<Producto[]> {
    return getPrismaFromContext(ctx).subcategoria.findUnique({
      where: {
        id: subcategoria.id,
      },
    }).Producto(args);
  }
}

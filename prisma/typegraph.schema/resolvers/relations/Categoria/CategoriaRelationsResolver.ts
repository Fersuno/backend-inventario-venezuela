import * as TypeGraphQL from "type-graphql";
import { Categoria } from "../../../models/Categoria";
import { Producto } from "../../../models/Producto";
import { Subcategoria } from "../../../models/Subcategoria";
import { CategoriaProductoArgs } from "./args/CategoriaProductoArgs";
import { CategoriaSubcategoriaArgs } from "./args/CategoriaSubcategoriaArgs";
import { transformFields, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => Categoria)
export class CategoriaRelationsResolver {
  @TypeGraphQL.FieldResolver(_type => [Subcategoria], {
    nullable: false
  })
  async subcategoria(@TypeGraphQL.Root() categoria: Categoria, @TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: CategoriaSubcategoriaArgs): Promise<Subcategoria[]> {
    return getPrismaFromContext(ctx).categoria.findUnique({
      where: {
        id: categoria.id,
      },
    }).subcategoria(args);
  }

  @TypeGraphQL.FieldResolver(_type => [Producto], {
    nullable: false
  })
  async producto(@TypeGraphQL.Root() categoria: Categoria, @TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: CategoriaProductoArgs): Promise<Producto[]> {
    return getPrismaFromContext(ctx).categoria.findUnique({
      where: {
        id: categoria.id,
      },
    }).producto(args);
  }
}

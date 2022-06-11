import * as TypeGraphQL from "type-graphql";
import { PrecioAlmacen } from "../../../models/PrecioAlmacen";
import { Producto } from "../../../models/Producto";
import { PrecioAlmacenProductoArgs } from "./args/PrecioAlmacenProductoArgs";
import { transformFields, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => PrecioAlmacen)
export class PrecioAlmacenRelationsResolver {
  @TypeGraphQL.FieldResolver(_type => [Producto], {
    nullable: false
  })
  async producto(@TypeGraphQL.Root() precioAlmacen: PrecioAlmacen, @TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: PrecioAlmacenProductoArgs): Promise<Producto[]> {
    return getPrismaFromContext(ctx).precioAlmacen.findUnique({
      where: {
        id: precioAlmacen.id,
      },
    }).producto(args);
  }
}

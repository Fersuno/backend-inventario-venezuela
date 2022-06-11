import * as TypeGraphQL from "type-graphql";
import { PrecioVenta } from "../../../models/PrecioVenta";
import { Producto } from "../../../models/Producto";
import { PrecioVentaProductoArgs } from "./args/PrecioVentaProductoArgs";
import { transformFields, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => PrecioVenta)
export class PrecioVentaRelationsResolver {
  @TypeGraphQL.FieldResolver(_type => [Producto], {
    nullable: false
  })
  async producto(@TypeGraphQL.Root() precioVenta: PrecioVenta, @TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: PrecioVentaProductoArgs): Promise<Producto[]> {
    return getPrismaFromContext(ctx).precioVenta.findUnique({
      where: {
        id: precioVenta.id,
      },
    }).producto(args);
  }
}

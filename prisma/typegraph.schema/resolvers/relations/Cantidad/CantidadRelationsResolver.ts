import * as TypeGraphQL from "type-graphql";
import { Cantidad } from "../../../models/Cantidad";
import { Producto } from "../../../models/Producto";
import { Sede } from "../../../models/Sede";
import { transformFields, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => Cantidad)
export class CantidadRelationsResolver {
  @TypeGraphQL.FieldResolver(_type => Sede, {
    nullable: false
  })
  async sede(@TypeGraphQL.Root() cantidad: Cantidad, @TypeGraphQL.Ctx() ctx: any): Promise<Sede> {
    return getPrismaFromContext(ctx).cantidad.findUnique({
      where: {
        id: cantidad.id,
      },
    }).sede({});
  }

  @TypeGraphQL.FieldResolver(_type => Producto, {
    nullable: false
  })
  async producto(@TypeGraphQL.Root() cantidad: Cantidad, @TypeGraphQL.Ctx() ctx: any): Promise<Producto> {
    return getPrismaFromContext(ctx).cantidad.findUnique({
      where: {
        id: cantidad.id,
      },
    }).producto({});
  }
}

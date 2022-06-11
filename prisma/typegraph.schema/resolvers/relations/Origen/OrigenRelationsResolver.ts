import * as TypeGraphQL from "type-graphql";
import { Origen } from "../../../models/Origen";
import { Producto } from "../../../models/Producto";
import { OrigenProductoArgs } from "./args/OrigenProductoArgs";
import { transformFields, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => Origen)
export class OrigenRelationsResolver {
  @TypeGraphQL.FieldResolver(_type => [Producto], {
    nullable: false
  })
  async producto(@TypeGraphQL.Root() origen: Origen, @TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: OrigenProductoArgs): Promise<Producto[]> {
    return getPrismaFromContext(ctx).origen.findUnique({
      where: {
        id: origen.id,
      },
    }).producto(args);
  }
}

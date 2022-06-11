import * as TypeGraphQL from "type-graphql";
import { Marca } from "../../../models/Marca";
import { Producto } from "../../../models/Producto";
import { MarcaProductoArgs } from "./args/MarcaProductoArgs";
import { transformFields, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => Marca)
export class MarcaRelationsResolver {
  @TypeGraphQL.FieldResolver(_type => [Producto], {
    nullable: false
  })
  async Producto(@TypeGraphQL.Root() marca: Marca, @TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: MarcaProductoArgs): Promise<Producto[]> {
    return getPrismaFromContext(ctx).marca.findUnique({
      where: {
        id: marca.id,
      },
    }).Producto(args);
  }
}

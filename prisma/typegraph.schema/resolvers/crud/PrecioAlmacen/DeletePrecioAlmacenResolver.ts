import * as TypeGraphQL from "type-graphql";
import graphqlFields from "graphql-fields";
import { GraphQLResolveInfo } from "graphql";
import { DeletePrecioAlmacenArgs } from "./args/DeletePrecioAlmacenArgs";
import { PrecioAlmacen } from "../../../models/PrecioAlmacen";
import { transformFields, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => PrecioAlmacen)
export class DeletePrecioAlmacenResolver {
  @TypeGraphQL.Mutation(_returns => PrecioAlmacen, {
    nullable: true
  })
  async deletePrecioAlmacen(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: DeletePrecioAlmacenArgs): Promise<PrecioAlmacen | null> {
    const { _count } = transformFields(
      graphqlFields(info as any)
    );
    return getPrismaFromContext(ctx).precioAlmacen.delete({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}

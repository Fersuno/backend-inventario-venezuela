import * as TypeGraphQL from "type-graphql";
import graphqlFields from "graphql-fields";
import { GraphQLResolveInfo } from "graphql";
import { DeletePrecioVentaArgs } from "./args/DeletePrecioVentaArgs";
import { PrecioVenta } from "../../../models/PrecioVenta";
import { transformFields, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => PrecioVenta)
export class DeletePrecioVentaResolver {
  @TypeGraphQL.Mutation(_returns => PrecioVenta, {
    nullable: true
  })
  async deletePrecioVenta(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: DeletePrecioVentaArgs): Promise<PrecioVenta | null> {
    const { _count } = transformFields(
      graphqlFields(info as any)
    );
    return getPrismaFromContext(ctx).precioVenta.delete({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}

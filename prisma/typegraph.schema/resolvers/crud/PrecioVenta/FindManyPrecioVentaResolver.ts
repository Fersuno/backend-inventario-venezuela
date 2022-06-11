import * as TypeGraphQL from "type-graphql";
import graphqlFields from "graphql-fields";
import { GraphQLResolveInfo } from "graphql";
import { FindManyPrecioVentaArgs } from "./args/FindManyPrecioVentaArgs";
import { PrecioVenta } from "../../../models/PrecioVenta";
import { transformFields, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => PrecioVenta)
export class FindManyPrecioVentaResolver {
  @TypeGraphQL.Query(_returns => [PrecioVenta], {
    nullable: false
  })
  async precioVentas(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindManyPrecioVentaArgs): Promise<PrecioVenta[]> {
    const { _count } = transformFields(
      graphqlFields(info as any)
    );
    return getPrismaFromContext(ctx).precioVenta.findMany({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}

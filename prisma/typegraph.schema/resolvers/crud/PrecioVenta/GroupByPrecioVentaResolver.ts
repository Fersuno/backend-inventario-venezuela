import * as TypeGraphQL from "type-graphql";
import graphqlFields from "graphql-fields";
import { GraphQLResolveInfo } from "graphql";
import { GroupByPrecioVentaArgs } from "./args/GroupByPrecioVentaArgs";
import { PrecioVenta } from "../../../models/PrecioVenta";
import { PrecioVentaGroupBy } from "../../outputs/PrecioVentaGroupBy";
import { transformFields, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => PrecioVenta)
export class GroupByPrecioVentaResolver {
  @TypeGraphQL.Query(_returns => [PrecioVentaGroupBy], {
    nullable: false
  })
  async groupByPrecioVenta(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: GroupByPrecioVentaArgs): Promise<PrecioVentaGroupBy[]> {
    const { _count, _avg, _sum, _min, _max } = transformFields(
      graphqlFields(info as any)
    );
    return getPrismaFromContext(ctx).precioVenta.groupBy({
      ...args,
      ...Object.fromEntries(
        Object.entries({ _count, _avg, _sum, _min, _max }).filter(([_, v]) => v != null)
      ),
    });
  }
}

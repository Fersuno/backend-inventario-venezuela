import * as TypeGraphQL from "type-graphql";
import graphqlFields from "graphql-fields";
import { GraphQLResolveInfo } from "graphql";
import { GroupByPrecioAlmacenArgs } from "./args/GroupByPrecioAlmacenArgs";
import { PrecioAlmacen } from "../../../models/PrecioAlmacen";
import { PrecioAlmacenGroupBy } from "../../outputs/PrecioAlmacenGroupBy";
import { transformFields, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => PrecioAlmacen)
export class GroupByPrecioAlmacenResolver {
  @TypeGraphQL.Query(_returns => [PrecioAlmacenGroupBy], {
    nullable: false
  })
  async groupByPrecioAlmacen(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: GroupByPrecioAlmacenArgs): Promise<PrecioAlmacenGroupBy[]> {
    const { _count, _avg, _sum, _min, _max } = transformFields(
      graphqlFields(info as any)
    );
    return getPrismaFromContext(ctx).precioAlmacen.groupBy({
      ...args,
      ...Object.fromEntries(
        Object.entries({ _count, _avg, _sum, _min, _max }).filter(([_, v]) => v != null)
      ),
    });
  }
}

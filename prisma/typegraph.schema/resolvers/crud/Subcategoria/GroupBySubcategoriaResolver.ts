import * as TypeGraphQL from "type-graphql";
import graphqlFields from "graphql-fields";
import { GraphQLResolveInfo } from "graphql";
import { GroupBySubcategoriaArgs } from "./args/GroupBySubcategoriaArgs";
import { Subcategoria } from "../../../models/Subcategoria";
import { SubcategoriaGroupBy } from "../../outputs/SubcategoriaGroupBy";
import { transformFields, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => Subcategoria)
export class GroupBySubcategoriaResolver {
  @TypeGraphQL.Query(_returns => [SubcategoriaGroupBy], {
    nullable: false
  })
  async groupBySubcategoria(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: GroupBySubcategoriaArgs): Promise<SubcategoriaGroupBy[]> {
    const { _count, _avg, _sum, _min, _max } = transformFields(
      graphqlFields(info as any)
    );
    return getPrismaFromContext(ctx).subcategoria.groupBy({
      ...args,
      ...Object.fromEntries(
        Object.entries({ _count, _avg, _sum, _min, _max }).filter(([_, v]) => v != null)
      ),
    });
  }
}

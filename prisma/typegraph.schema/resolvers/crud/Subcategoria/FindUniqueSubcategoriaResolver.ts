import * as TypeGraphQL from "type-graphql";
import graphqlFields from "graphql-fields";
import { GraphQLResolveInfo } from "graphql";
import { FindUniqueSubcategoriaArgs } from "./args/FindUniqueSubcategoriaArgs";
import { Subcategoria } from "../../../models/Subcategoria";
import { transformFields, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => Subcategoria)
export class FindUniqueSubcategoriaResolver {
  @TypeGraphQL.Query(_returns => Subcategoria, {
    nullable: true
  })
  async subcategoria(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindUniqueSubcategoriaArgs): Promise<Subcategoria | null> {
    const { _count } = transformFields(
      graphqlFields(info as any)
    );
    return getPrismaFromContext(ctx).subcategoria.findUnique({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}

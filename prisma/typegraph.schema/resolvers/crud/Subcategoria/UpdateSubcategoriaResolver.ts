import * as TypeGraphQL from "type-graphql";
import graphqlFields from "graphql-fields";
import { GraphQLResolveInfo } from "graphql";
import { UpdateSubcategoriaArgs } from "./args/UpdateSubcategoriaArgs";
import { Subcategoria } from "../../../models/Subcategoria";
import { transformFields, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => Subcategoria)
export class UpdateSubcategoriaResolver {
  @TypeGraphQL.Mutation(_returns => Subcategoria, {
    nullable: true
  })
  async updateSubcategoria(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: UpdateSubcategoriaArgs): Promise<Subcategoria | null> {
    const { _count } = transformFields(
      graphqlFields(info as any)
    );
    return getPrismaFromContext(ctx).subcategoria.update({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}

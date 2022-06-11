import * as TypeGraphQL from "type-graphql";
import graphqlFields from "graphql-fields";
import { GraphQLResolveInfo } from "graphql";
import { CreateSubcategoriaArgs } from "./args/CreateSubcategoriaArgs";
import { Subcategoria } from "../../../models/Subcategoria";
import { transformFields, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => Subcategoria)
export class CreateSubcategoriaResolver {
  @TypeGraphQL.Mutation(_returns => Subcategoria, {
    nullable: false
  })
  async createSubcategoria(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: CreateSubcategoriaArgs): Promise<Subcategoria> {
    const { _count } = transformFields(
      graphqlFields(info as any)
    );
    return getPrismaFromContext(ctx).subcategoria.create({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}

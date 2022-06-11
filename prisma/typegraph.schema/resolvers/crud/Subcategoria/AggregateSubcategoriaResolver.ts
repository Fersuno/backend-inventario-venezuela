import * as TypeGraphQL from "type-graphql";
import graphqlFields from "graphql-fields";
import { GraphQLResolveInfo } from "graphql";
import { AggregateSubcategoriaArgs } from "./args/AggregateSubcategoriaArgs";
import { Subcategoria } from "../../../models/Subcategoria";
import { AggregateSubcategoria } from "../../outputs/AggregateSubcategoria";
import { transformFields, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => Subcategoria)
export class AggregateSubcategoriaResolver {
  @TypeGraphQL.Query(_returns => AggregateSubcategoria, {
    nullable: false
  })
  async aggregateSubcategoria(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: AggregateSubcategoriaArgs): Promise<AggregateSubcategoria> {
    return getPrismaFromContext(ctx).subcategoria.aggregate({
      ...args,
      ...transformFields(graphqlFields(info as any)),
    });
  }
}

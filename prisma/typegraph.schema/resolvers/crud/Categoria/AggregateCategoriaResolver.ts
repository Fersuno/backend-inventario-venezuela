import * as TypeGraphQL from "type-graphql";
import graphqlFields from "graphql-fields";
import { GraphQLResolveInfo } from "graphql";
import { AggregateCategoriaArgs } from "./args/AggregateCategoriaArgs";
import { Categoria } from "../../../models/Categoria";
import { AggregateCategoria } from "../../outputs/AggregateCategoria";
import { transformFields, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => Categoria)
export class AggregateCategoriaResolver {
  @TypeGraphQL.Query(_returns => AggregateCategoria, {
    nullable: false
  })
  async aggregateCategoria(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: AggregateCategoriaArgs): Promise<AggregateCategoria> {
    return getPrismaFromContext(ctx).categoria.aggregate({
      ...args,
      ...transformFields(graphqlFields(info as any)),
    });
  }
}

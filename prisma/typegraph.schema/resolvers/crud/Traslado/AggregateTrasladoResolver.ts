import * as TypeGraphQL from "type-graphql";
import graphqlFields from "graphql-fields";
import { GraphQLResolveInfo } from "graphql";
import { AggregateTrasladoArgs } from "./args/AggregateTrasladoArgs";
import { Traslado } from "../../../models/Traslado";
import { AggregateTraslado } from "../../outputs/AggregateTraslado";
import { transformFields, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => Traslado)
export class AggregateTrasladoResolver {
  @TypeGraphQL.Query(_returns => AggregateTraslado, {
    nullable: false
  })
  async aggregateTraslado(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: AggregateTrasladoArgs): Promise<AggregateTraslado> {
    return getPrismaFromContext(ctx).traslado.aggregate({
      ...args,
      ...transformFields(graphqlFields(info as any)),
    });
  }
}

import * as TypeGraphQL from "type-graphql";
import graphqlFields from "graphql-fields";
import { GraphQLResolveInfo } from "graphql";
import { AggregateSedeArgs } from "./args/AggregateSedeArgs";
import { Sede } from "../../../models/Sede";
import { AggregateSede } from "../../outputs/AggregateSede";
import { transformFields, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => Sede)
export class AggregateSedeResolver {
  @TypeGraphQL.Query(_returns => AggregateSede, {
    nullable: false
  })
  async aggregateSede(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: AggregateSedeArgs): Promise<AggregateSede> {
    return getPrismaFromContext(ctx).sede.aggregate({
      ...args,
      ...transformFields(graphqlFields(info as any)),
    });
  }
}

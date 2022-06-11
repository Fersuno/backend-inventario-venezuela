import * as TypeGraphQL from "type-graphql";
import graphqlFields from "graphql-fields";
import { GraphQLResolveInfo } from "graphql";
import { AggregateOrigenArgs } from "./args/AggregateOrigenArgs";
import { Origen } from "../../../models/Origen";
import { AggregateOrigen } from "../../outputs/AggregateOrigen";
import { transformFields, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => Origen)
export class AggregateOrigenResolver {
  @TypeGraphQL.Query(_returns => AggregateOrigen, {
    nullable: false
  })
  async aggregateOrigen(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: AggregateOrigenArgs): Promise<AggregateOrigen> {
    return getPrismaFromContext(ctx).origen.aggregate({
      ...args,
      ...transformFields(graphqlFields(info as any)),
    });
  }
}

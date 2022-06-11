import * as TypeGraphQL from "type-graphql";
import graphqlFields from "graphql-fields";
import { GraphQLResolveInfo } from "graphql";
import { AggregateEstadoArgs } from "./args/AggregateEstadoArgs";
import { Estado } from "../../../models/Estado";
import { AggregateEstado } from "../../outputs/AggregateEstado";
import { transformFields, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => Estado)
export class AggregateEstadoResolver {
  @TypeGraphQL.Query(_returns => AggregateEstado, {
    nullable: false
  })
  async aggregateEstado(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: AggregateEstadoArgs): Promise<AggregateEstado> {
    return getPrismaFromContext(ctx).estado.aggregate({
      ...args,
      ...transformFields(graphqlFields(info as any)),
    });
  }
}

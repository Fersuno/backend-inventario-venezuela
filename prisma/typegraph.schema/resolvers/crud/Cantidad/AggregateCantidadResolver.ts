import * as TypeGraphQL from "type-graphql";
import graphqlFields from "graphql-fields";
import { GraphQLResolveInfo } from "graphql";
import { AggregateCantidadArgs } from "./args/AggregateCantidadArgs";
import { Cantidad } from "../../../models/Cantidad";
import { AggregateCantidad } from "../../outputs/AggregateCantidad";
import { transformFields, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => Cantidad)
export class AggregateCantidadResolver {
  @TypeGraphQL.Query(_returns => AggregateCantidad, {
    nullable: false
  })
  async aggregateCantidad(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: AggregateCantidadArgs): Promise<AggregateCantidad> {
    return getPrismaFromContext(ctx).cantidad.aggregate({
      ...args,
      ...transformFields(graphqlFields(info as any)),
    });
  }
}

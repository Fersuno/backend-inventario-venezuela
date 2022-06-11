import * as TypeGraphQL from "type-graphql";
import graphqlFields from "graphql-fields";
import { GraphQLResolveInfo } from "graphql";
import { AggregatePrecioAlmacenArgs } from "./args/AggregatePrecioAlmacenArgs";
import { PrecioAlmacen } from "../../../models/PrecioAlmacen";
import { AggregatePrecioAlmacen } from "../../outputs/AggregatePrecioAlmacen";
import { transformFields, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => PrecioAlmacen)
export class AggregatePrecioAlmacenResolver {
  @TypeGraphQL.Query(_returns => AggregatePrecioAlmacen, {
    nullable: false
  })
  async aggregatePrecioAlmacen(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: AggregatePrecioAlmacenArgs): Promise<AggregatePrecioAlmacen> {
    return getPrismaFromContext(ctx).precioAlmacen.aggregate({
      ...args,
      ...transformFields(graphqlFields(info as any)),
    });
  }
}

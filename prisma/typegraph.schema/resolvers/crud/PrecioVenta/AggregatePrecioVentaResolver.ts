import * as TypeGraphQL from "type-graphql";
import graphqlFields from "graphql-fields";
import { GraphQLResolveInfo } from "graphql";
import { AggregatePrecioVentaArgs } from "./args/AggregatePrecioVentaArgs";
import { PrecioVenta } from "../../../models/PrecioVenta";
import { AggregatePrecioVenta } from "../../outputs/AggregatePrecioVenta";
import { transformFields, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => PrecioVenta)
export class AggregatePrecioVentaResolver {
  @TypeGraphQL.Query(_returns => AggregatePrecioVenta, {
    nullable: false
  })
  async aggregatePrecioVenta(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: AggregatePrecioVentaArgs): Promise<AggregatePrecioVenta> {
    return getPrismaFromContext(ctx).precioVenta.aggregate({
      ...args,
      ...transformFields(graphqlFields(info as any)),
    });
  }
}

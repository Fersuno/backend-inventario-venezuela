import * as TypeGraphQL from "type-graphql";
import graphqlFields from "graphql-fields";
import { GraphQLResolveInfo } from "graphql";
import { AggregateProductoArgs } from "./args/AggregateProductoArgs";
import { Producto } from "../../../models/Producto";
import { AggregateProducto } from "../../outputs/AggregateProducto";
import { transformFields, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => Producto)
export class AggregateProductoResolver {
  @TypeGraphQL.Query(_returns => AggregateProducto, {
    nullable: false
  })
  async aggregateProducto(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: AggregateProductoArgs): Promise<AggregateProducto> {
    return getPrismaFromContext(ctx).producto.aggregate({
      ...args,
      ...transformFields(graphqlFields(info as any)),
    });
  }
}

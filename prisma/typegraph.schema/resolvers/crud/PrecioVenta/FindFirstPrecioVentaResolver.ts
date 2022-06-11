import * as TypeGraphQL from "type-graphql";
import graphqlFields from "graphql-fields";
import { GraphQLResolveInfo } from "graphql";
import { FindFirstPrecioVentaArgs } from "./args/FindFirstPrecioVentaArgs";
import { PrecioVenta } from "../../../models/PrecioVenta";
import { transformFields, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => PrecioVenta)
export class FindFirstPrecioVentaResolver {
  @TypeGraphQL.Query(_returns => PrecioVenta, {
    nullable: true
  })
  async findFirstPrecioVenta(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindFirstPrecioVentaArgs): Promise<PrecioVenta | null> {
    const { _count } = transformFields(
      graphqlFields(info as any)
    );
    return getPrismaFromContext(ctx).precioVenta.findFirst({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}

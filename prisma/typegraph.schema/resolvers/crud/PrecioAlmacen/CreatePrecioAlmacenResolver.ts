import * as TypeGraphQL from "type-graphql";
import graphqlFields from "graphql-fields";
import { GraphQLResolveInfo } from "graphql";
import { CreatePrecioAlmacenArgs } from "./args/CreatePrecioAlmacenArgs";
import { PrecioAlmacen } from "../../../models/PrecioAlmacen";
import { transformFields, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => PrecioAlmacen)
export class CreatePrecioAlmacenResolver {
  @TypeGraphQL.Mutation(_returns => PrecioAlmacen, {
    nullable: false
  })
  async createPrecioAlmacen(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: CreatePrecioAlmacenArgs): Promise<PrecioAlmacen> {
    const { _count } = transformFields(
      graphqlFields(info as any)
    );
    return getPrismaFromContext(ctx).precioAlmacen.create({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}

import * as TypeGraphQL from "type-graphql";
import { Sede } from "../../../models/Sede";
import { Traslado } from "../../../models/Traslado";
import { transformFields, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => Traslado)
export class TrasladoRelationsResolver {
  @TypeGraphQL.FieldResolver(_type => Sede, {
    nullable: false
  })
  async sede(@TypeGraphQL.Root() traslado: Traslado, @TypeGraphQL.Ctx() ctx: any): Promise<Sede> {
    return getPrismaFromContext(ctx).traslado.findUnique({
      where: {
        id: traslado.id,
      },
    }).sede({});
  }

  @TypeGraphQL.FieldResolver(_type => Sede, {
    nullable: false
  })
  async sedeOrigen(@TypeGraphQL.Root() traslado: Traslado, @TypeGraphQL.Ctx() ctx: any): Promise<Sede> {
    return getPrismaFromContext(ctx).traslado.findUnique({
      where: {
        id: traslado.id,
      },
    }).sedeOrigen({});
  }

  @TypeGraphQL.FieldResolver(_type => Sede, {
    nullable: false
  })
  async sedeDestino(@TypeGraphQL.Root() traslado: Traslado, @TypeGraphQL.Ctx() ctx: any): Promise<Sede> {
    return getPrismaFromContext(ctx).traslado.findUnique({
      where: {
        id: traslado.id,
      },
    }).sedeDestino({});
  }
}

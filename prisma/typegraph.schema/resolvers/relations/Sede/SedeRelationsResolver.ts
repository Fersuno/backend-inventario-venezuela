import * as TypeGraphQL from "type-graphql";
import { Cantidad } from "../../../models/Cantidad";
import { Estado } from "../../../models/Estado";
import { Sede } from "../../../models/Sede";
import { Traslado } from "../../../models/Traslado";
import { SedeCantidadArgs } from "./args/SedeCantidadArgs";
import { SedeMovimientosDestinoArgs } from "./args/SedeMovimientosDestinoArgs";
import { SedeMovimientosOrigenArgs } from "./args/SedeMovimientosOrigenArgs";
import { SedeTrasladosArgs } from "./args/SedeTrasladosArgs";
import { transformFields, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => Sede)
export class SedeRelationsResolver {
  @TypeGraphQL.FieldResolver(_type => Estado, {
    nullable: false
  })
  async estado(@TypeGraphQL.Root() sede: Sede, @TypeGraphQL.Ctx() ctx: any): Promise<Estado> {
    return getPrismaFromContext(ctx).sede.findUnique({
      where: {
        id: sede.id,
      },
    }).estado({});
  }

  @TypeGraphQL.FieldResolver(_type => [Traslado], {
    nullable: false
  })
  async movimientosDestino(@TypeGraphQL.Root() sede: Sede, @TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: SedeMovimientosDestinoArgs): Promise<Traslado[]> {
    return getPrismaFromContext(ctx).sede.findUnique({
      where: {
        id: sede.id,
      },
    }).movimientosDestino(args);
  }

  @TypeGraphQL.FieldResolver(_type => [Traslado], {
    nullable: false
  })
  async movimientosOrigen(@TypeGraphQL.Root() sede: Sede, @TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: SedeMovimientosOrigenArgs): Promise<Traslado[]> {
    return getPrismaFromContext(ctx).sede.findUnique({
      where: {
        id: sede.id,
      },
    }).movimientosOrigen(args);
  }

  @TypeGraphQL.FieldResolver(_type => [Traslado], {
    nullable: false
  })
  async traslados(@TypeGraphQL.Root() sede: Sede, @TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: SedeTrasladosArgs): Promise<Traslado[]> {
    return getPrismaFromContext(ctx).sede.findUnique({
      where: {
        id: sede.id,
      },
    }).traslados(args);
  }

  @TypeGraphQL.FieldResolver(_type => [Cantidad], {
    nullable: false
  })
  async Cantidad(@TypeGraphQL.Root() sede: Sede, @TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: SedeCantidadArgs): Promise<Cantidad[]> {
    return getPrismaFromContext(ctx).sede.findUnique({
      where: {
        id: sede.id,
      },
    }).Cantidad(args);
  }
}

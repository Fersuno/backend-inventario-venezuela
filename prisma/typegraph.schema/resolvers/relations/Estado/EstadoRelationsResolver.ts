import * as TypeGraphQL from "type-graphql";
import { Estado } from "../../../models/Estado";
import { Sede } from "../../../models/Sede";
import { EstadoSedesArgs } from "./args/EstadoSedesArgs";
import { transformFields, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => Estado)
export class EstadoRelationsResolver {
  @TypeGraphQL.FieldResolver(_type => [Sede], {
    nullable: false
  })
  async sedes(@TypeGraphQL.Root() estado: Estado, @TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: EstadoSedesArgs): Promise<Sede[]> {
    return getPrismaFromContext(ctx).estado.findUnique({
      where: {
        id: estado.id,
      },
    }).sedes(args);
  }
}

import * as TypeGraphQL from "type-graphql";
import graphqlFields from "graphql-fields";
import { GraphQLResolveInfo } from "graphql";
import { AggregateMarcaArgs } from "./args/AggregateMarcaArgs";
import { Marca } from "../../../models/Marca";
import { AggregateMarca } from "../../outputs/AggregateMarca";
import { transformFields, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => Marca)
export class AggregateMarcaResolver {
  @TypeGraphQL.Query(_returns => AggregateMarca, {
    nullable: false
  })
  async aggregateMarca(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: AggregateMarcaArgs): Promise<AggregateMarca> {
    return getPrismaFromContext(ctx).marca.aggregate({
      ...args,
      ...transformFields(graphqlFields(info as any)),
    });
  }
}

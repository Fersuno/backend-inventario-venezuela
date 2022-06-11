import * as TypeGraphQL from "type-graphql";
import graphqlFields from "graphql-fields";
import { GraphQLResolveInfo } from "graphql";
import { AggregatePrecioAlmacenArgs } from "./args/AggregatePrecioAlmacenArgs";
import { CreateManyPrecioAlmacenArgs } from "./args/CreateManyPrecioAlmacenArgs";
import { CreatePrecioAlmacenArgs } from "./args/CreatePrecioAlmacenArgs";
import { DeleteManyPrecioAlmacenArgs } from "./args/DeleteManyPrecioAlmacenArgs";
import { DeletePrecioAlmacenArgs } from "./args/DeletePrecioAlmacenArgs";
import { FindFirstPrecioAlmacenArgs } from "./args/FindFirstPrecioAlmacenArgs";
import { FindManyPrecioAlmacenArgs } from "./args/FindManyPrecioAlmacenArgs";
import { FindUniquePrecioAlmacenArgs } from "./args/FindUniquePrecioAlmacenArgs";
import { GroupByPrecioAlmacenArgs } from "./args/GroupByPrecioAlmacenArgs";
import { UpdateManyPrecioAlmacenArgs } from "./args/UpdateManyPrecioAlmacenArgs";
import { UpdatePrecioAlmacenArgs } from "./args/UpdatePrecioAlmacenArgs";
import { UpsertPrecioAlmacenArgs } from "./args/UpsertPrecioAlmacenArgs";
import { transformFields, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";
import { PrecioAlmacen } from "../../../models/PrecioAlmacen";
import { AffectedRowsOutput } from "../../outputs/AffectedRowsOutput";
import { AggregatePrecioAlmacen } from "../../outputs/AggregatePrecioAlmacen";
import { PrecioAlmacenGroupBy } from "../../outputs/PrecioAlmacenGroupBy";

@TypeGraphQL.Resolver(_of => PrecioAlmacen)
export class PrecioAlmacenCrudResolver {
  @TypeGraphQL.Query(_returns => PrecioAlmacen, {
    nullable: true
  })
  async precioAlmacen(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindUniquePrecioAlmacenArgs): Promise<PrecioAlmacen | null> {
    const { _count } = transformFields(
      graphqlFields(info as any)
    );
    return getPrismaFromContext(ctx).precioAlmacen.findUnique({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Query(_returns => PrecioAlmacen, {
    nullable: true
  })
  async findFirstPrecioAlmacen(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindFirstPrecioAlmacenArgs): Promise<PrecioAlmacen | null> {
    const { _count } = transformFields(
      graphqlFields(info as any)
    );
    return getPrismaFromContext(ctx).precioAlmacen.findFirst({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Query(_returns => [PrecioAlmacen], {
    nullable: false
  })
  async precioAlmacens(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindManyPrecioAlmacenArgs): Promise<PrecioAlmacen[]> {
    const { _count } = transformFields(
      graphqlFields(info as any)
    );
    return getPrismaFromContext(ctx).precioAlmacen.findMany({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

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

  @TypeGraphQL.Mutation(_returns => AffectedRowsOutput, {
    nullable: false
  })
  async createManyPrecioAlmacen(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: CreateManyPrecioAlmacenArgs): Promise<AffectedRowsOutput> {
    const { _count } = transformFields(
      graphqlFields(info as any)
    );
    return getPrismaFromContext(ctx).precioAlmacen.createMany({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Mutation(_returns => PrecioAlmacen, {
    nullable: true
  })
  async deletePrecioAlmacen(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: DeletePrecioAlmacenArgs): Promise<PrecioAlmacen | null> {
    const { _count } = transformFields(
      graphqlFields(info as any)
    );
    return getPrismaFromContext(ctx).precioAlmacen.delete({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Mutation(_returns => PrecioAlmacen, {
    nullable: true
  })
  async updatePrecioAlmacen(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: UpdatePrecioAlmacenArgs): Promise<PrecioAlmacen | null> {
    const { _count } = transformFields(
      graphqlFields(info as any)
    );
    return getPrismaFromContext(ctx).precioAlmacen.update({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Mutation(_returns => AffectedRowsOutput, {
    nullable: false
  })
  async deleteManyPrecioAlmacen(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: DeleteManyPrecioAlmacenArgs): Promise<AffectedRowsOutput> {
    const { _count } = transformFields(
      graphqlFields(info as any)
    );
    return getPrismaFromContext(ctx).precioAlmacen.deleteMany({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Mutation(_returns => AffectedRowsOutput, {
    nullable: false
  })
  async updateManyPrecioAlmacen(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: UpdateManyPrecioAlmacenArgs): Promise<AffectedRowsOutput> {
    const { _count } = transformFields(
      graphqlFields(info as any)
    );
    return getPrismaFromContext(ctx).precioAlmacen.updateMany({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Mutation(_returns => PrecioAlmacen, {
    nullable: false
  })
  async upsertPrecioAlmacen(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: UpsertPrecioAlmacenArgs): Promise<PrecioAlmacen> {
    const { _count } = transformFields(
      graphqlFields(info as any)
    );
    return getPrismaFromContext(ctx).precioAlmacen.upsert({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Query(_returns => AggregatePrecioAlmacen, {
    nullable: false
  })
  async aggregatePrecioAlmacen(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: AggregatePrecioAlmacenArgs): Promise<AggregatePrecioAlmacen> {
    return getPrismaFromContext(ctx).precioAlmacen.aggregate({
      ...args,
      ...transformFields(graphqlFields(info as any)),
    });
  }

  @TypeGraphQL.Query(_returns => [PrecioAlmacenGroupBy], {
    nullable: false
  })
  async groupByPrecioAlmacen(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: GroupByPrecioAlmacenArgs): Promise<PrecioAlmacenGroupBy[]> {
    const { _count, _avg, _sum, _min, _max } = transformFields(
      graphqlFields(info as any)
    );
    return getPrismaFromContext(ctx).precioAlmacen.groupBy({
      ...args,
      ...Object.fromEntries(
        Object.entries({ _count, _avg, _sum, _min, _max }).filter(([_, v]) => v != null)
      ),
    });
  }
}

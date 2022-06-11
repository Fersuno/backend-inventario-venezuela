import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { EstadoOrderByWithAggregationInput } from "../../../inputs/EstadoOrderByWithAggregationInput";
import { EstadoScalarWhereWithAggregatesInput } from "../../../inputs/EstadoScalarWhereWithAggregatesInput";
import { EstadoWhereInput } from "../../../inputs/EstadoWhereInput";
import { EstadoScalarFieldEnum } from "../../../../enums/EstadoScalarFieldEnum";

@TypeGraphQL.ArgsType()
export class GroupByEstadoArgs {
  @TypeGraphQL.Field(_type => EstadoWhereInput, {
    nullable: true
  })
  where?: EstadoWhereInput | undefined;

  @TypeGraphQL.Field(_type => [EstadoOrderByWithAggregationInput], {
    nullable: true
  })
  orderBy?: EstadoOrderByWithAggregationInput[] | undefined;

  @TypeGraphQL.Field(_type => [EstadoScalarFieldEnum], {
    nullable: false
  })
  by!: Array<"id" | "nombre">;

  @TypeGraphQL.Field(_type => EstadoScalarWhereWithAggregatesInput, {
    nullable: true
  })
  having?: EstadoScalarWhereWithAggregatesInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;
}

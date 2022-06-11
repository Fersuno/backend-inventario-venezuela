import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { SedeOrderByWithAggregationInput } from "../../../inputs/SedeOrderByWithAggregationInput";
import { SedeScalarWhereWithAggregatesInput } from "../../../inputs/SedeScalarWhereWithAggregatesInput";
import { SedeWhereInput } from "../../../inputs/SedeWhereInput";
import { SedeScalarFieldEnum } from "../../../../enums/SedeScalarFieldEnum";

@TypeGraphQL.ArgsType()
export class GroupBySedeArgs {
  @TypeGraphQL.Field(_type => SedeWhereInput, {
    nullable: true
  })
  where?: SedeWhereInput | undefined;

  @TypeGraphQL.Field(_type => [SedeOrderByWithAggregationInput], {
    nullable: true
  })
  orderBy?: SedeOrderByWithAggregationInput[] | undefined;

  @TypeGraphQL.Field(_type => [SedeScalarFieldEnum], {
    nullable: false
  })
  by!: Array<"id" | "nombre" | "estadoId">;

  @TypeGraphQL.Field(_type => SedeScalarWhereWithAggregatesInput, {
    nullable: true
  })
  having?: SedeScalarWhereWithAggregatesInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;
}

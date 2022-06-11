import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { OrigenOrderByWithAggregationInput } from "../../../inputs/OrigenOrderByWithAggregationInput";
import { OrigenScalarWhereWithAggregatesInput } from "../../../inputs/OrigenScalarWhereWithAggregatesInput";
import { OrigenWhereInput } from "../../../inputs/OrigenWhereInput";
import { OrigenScalarFieldEnum } from "../../../../enums/OrigenScalarFieldEnum";

@TypeGraphQL.ArgsType()
export class GroupByOrigenArgs {
  @TypeGraphQL.Field(_type => OrigenWhereInput, {
    nullable: true
  })
  where?: OrigenWhereInput | undefined;

  @TypeGraphQL.Field(_type => [OrigenOrderByWithAggregationInput], {
    nullable: true
  })
  orderBy?: OrigenOrderByWithAggregationInput[] | undefined;

  @TypeGraphQL.Field(_type => [OrigenScalarFieldEnum], {
    nullable: false
  })
  by!: Array<"id" | "nombre" | "porcentaje">;

  @TypeGraphQL.Field(_type => OrigenScalarWhereWithAggregatesInput, {
    nullable: true
  })
  having?: OrigenScalarWhereWithAggregatesInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;
}

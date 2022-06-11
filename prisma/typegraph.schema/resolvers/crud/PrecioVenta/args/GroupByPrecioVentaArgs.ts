import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { PrecioVentaOrderByWithAggregationInput } from "../../../inputs/PrecioVentaOrderByWithAggregationInput";
import { PrecioVentaScalarWhereWithAggregatesInput } from "../../../inputs/PrecioVentaScalarWhereWithAggregatesInput";
import { PrecioVentaWhereInput } from "../../../inputs/PrecioVentaWhereInput";
import { PrecioVentaScalarFieldEnum } from "../../../../enums/PrecioVentaScalarFieldEnum";

@TypeGraphQL.ArgsType()
export class GroupByPrecioVentaArgs {
  @TypeGraphQL.Field(_type => PrecioVentaWhereInput, {
    nullable: true
  })
  where?: PrecioVentaWhereInput | undefined;

  @TypeGraphQL.Field(_type => [PrecioVentaOrderByWithAggregationInput], {
    nullable: true
  })
  orderBy?: PrecioVentaOrderByWithAggregationInput[] | undefined;

  @TypeGraphQL.Field(_type => [PrecioVentaScalarFieldEnum], {
    nullable: false
  })
  by!: Array<"id" | "a" | "aa" | "aaa" | "detal" | "instalacion">;

  @TypeGraphQL.Field(_type => PrecioVentaScalarWhereWithAggregatesInput, {
    nullable: true
  })
  having?: PrecioVentaScalarWhereWithAggregatesInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;
}

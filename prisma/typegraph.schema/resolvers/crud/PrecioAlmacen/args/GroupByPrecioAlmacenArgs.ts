import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { PrecioAlmacenOrderByWithAggregationInput } from "../../../inputs/PrecioAlmacenOrderByWithAggregationInput";
import { PrecioAlmacenScalarWhereWithAggregatesInput } from "../../../inputs/PrecioAlmacenScalarWhereWithAggregatesInput";
import { PrecioAlmacenWhereInput } from "../../../inputs/PrecioAlmacenWhereInput";
import { PrecioAlmacenScalarFieldEnum } from "../../../../enums/PrecioAlmacenScalarFieldEnum";

@TypeGraphQL.ArgsType()
export class GroupByPrecioAlmacenArgs {
  @TypeGraphQL.Field(_type => PrecioAlmacenWhereInput, {
    nullable: true
  })
  where?: PrecioAlmacenWhereInput | undefined;

  @TypeGraphQL.Field(_type => [PrecioAlmacenOrderByWithAggregationInput], {
    nullable: true
  })
  orderBy?: PrecioAlmacenOrderByWithAggregationInput[] | undefined;

  @TypeGraphQL.Field(_type => [PrecioAlmacenScalarFieldEnum], {
    nullable: false
  })
  by!: Array<"id" | "rmb" | "cif" | "mnj">;

  @TypeGraphQL.Field(_type => PrecioAlmacenScalarWhereWithAggregatesInput, {
    nullable: true
  })
  having?: PrecioAlmacenScalarWhereWithAggregatesInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;
}

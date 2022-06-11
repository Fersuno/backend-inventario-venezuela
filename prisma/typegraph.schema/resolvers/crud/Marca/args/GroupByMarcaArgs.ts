import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { MarcaOrderByWithAggregationInput } from "../../../inputs/MarcaOrderByWithAggregationInput";
import { MarcaScalarWhereWithAggregatesInput } from "../../../inputs/MarcaScalarWhereWithAggregatesInput";
import { MarcaWhereInput } from "../../../inputs/MarcaWhereInput";
import { MarcaScalarFieldEnum } from "../../../../enums/MarcaScalarFieldEnum";

@TypeGraphQL.ArgsType()
export class GroupByMarcaArgs {
  @TypeGraphQL.Field(_type => MarcaWhereInput, {
    nullable: true
  })
  where?: MarcaWhereInput | undefined;

  @TypeGraphQL.Field(_type => [MarcaOrderByWithAggregationInput], {
    nullable: true
  })
  orderBy?: MarcaOrderByWithAggregationInput[] | undefined;

  @TypeGraphQL.Field(_type => [MarcaScalarFieldEnum], {
    nullable: false
  })
  by!: Array<"id" | "nombre">;

  @TypeGraphQL.Field(_type => MarcaScalarWhereWithAggregatesInput, {
    nullable: true
  })
  having?: MarcaScalarWhereWithAggregatesInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;
}

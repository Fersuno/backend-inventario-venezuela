import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { CategoriaOrderByWithAggregationInput } from "../../../inputs/CategoriaOrderByWithAggregationInput";
import { CategoriaScalarWhereWithAggregatesInput } from "../../../inputs/CategoriaScalarWhereWithAggregatesInput";
import { CategoriaWhereInput } from "../../../inputs/CategoriaWhereInput";
import { CategoriaScalarFieldEnum } from "../../../../enums/CategoriaScalarFieldEnum";

@TypeGraphQL.ArgsType()
export class GroupByCategoriaArgs {
  @TypeGraphQL.Field(_type => CategoriaWhereInput, {
    nullable: true
  })
  where?: CategoriaWhereInput | undefined;

  @TypeGraphQL.Field(_type => [CategoriaOrderByWithAggregationInput], {
    nullable: true
  })
  orderBy?: CategoriaOrderByWithAggregationInput[] | undefined;

  @TypeGraphQL.Field(_type => [CategoriaScalarFieldEnum], {
    nullable: false
  })
  by!: Array<"id" | "nombre">;

  @TypeGraphQL.Field(_type => CategoriaScalarWhereWithAggregatesInput, {
    nullable: true
  })
  having?: CategoriaScalarWhereWithAggregatesInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;
}

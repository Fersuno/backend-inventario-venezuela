import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { SubcategoriaOrderByWithAggregationInput } from "../../../inputs/SubcategoriaOrderByWithAggregationInput";
import { SubcategoriaScalarWhereWithAggregatesInput } from "../../../inputs/SubcategoriaScalarWhereWithAggregatesInput";
import { SubcategoriaWhereInput } from "../../../inputs/SubcategoriaWhereInput";
import { SubcategoriaScalarFieldEnum } from "../../../../enums/SubcategoriaScalarFieldEnum";

@TypeGraphQL.ArgsType()
export class GroupBySubcategoriaArgs {
  @TypeGraphQL.Field(_type => SubcategoriaWhereInput, {
    nullable: true
  })
  where?: SubcategoriaWhereInput | undefined;

  @TypeGraphQL.Field(_type => [SubcategoriaOrderByWithAggregationInput], {
    nullable: true
  })
  orderBy?: SubcategoriaOrderByWithAggregationInput[] | undefined;

  @TypeGraphQL.Field(_type => [SubcategoriaScalarFieldEnum], {
    nullable: false
  })
  by!: Array<"id" | "nombre" | "categoriaId">;

  @TypeGraphQL.Field(_type => SubcategoriaScalarWhereWithAggregatesInput, {
    nullable: true
  })
  having?: SubcategoriaScalarWhereWithAggregatesInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;
}

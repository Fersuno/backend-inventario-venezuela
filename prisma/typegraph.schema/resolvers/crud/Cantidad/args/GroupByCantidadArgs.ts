import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { CantidadOrderByWithAggregationInput } from "../../../inputs/CantidadOrderByWithAggregationInput";
import { CantidadScalarWhereWithAggregatesInput } from "../../../inputs/CantidadScalarWhereWithAggregatesInput";
import { CantidadWhereInput } from "../../../inputs/CantidadWhereInput";
import { CantidadScalarFieldEnum } from "../../../../enums/CantidadScalarFieldEnum";

@TypeGraphQL.ArgsType()
export class GroupByCantidadArgs {
  @TypeGraphQL.Field(_type => CantidadWhereInput, {
    nullable: true
  })
  where?: CantidadWhereInput | undefined;

  @TypeGraphQL.Field(_type => [CantidadOrderByWithAggregationInput], {
    nullable: true
  })
  orderBy?: CantidadOrderByWithAggregationInput[] | undefined;

  @TypeGraphQL.Field(_type => [CantidadScalarFieldEnum], {
    nullable: false
  })
  by!: Array<"id" | "cantidad" | "sedeId" | "productoId">;

  @TypeGraphQL.Field(_type => CantidadScalarWhereWithAggregatesInput, {
    nullable: true
  })
  having?: CantidadScalarWhereWithAggregatesInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;
}

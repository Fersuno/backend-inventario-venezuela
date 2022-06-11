import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { TrasladoOrderByWithAggregationInput } from "../../../inputs/TrasladoOrderByWithAggregationInput";
import { TrasladoScalarWhereWithAggregatesInput } from "../../../inputs/TrasladoScalarWhereWithAggregatesInput";
import { TrasladoWhereInput } from "../../../inputs/TrasladoWhereInput";
import { TrasladoScalarFieldEnum } from "../../../../enums/TrasladoScalarFieldEnum";

@TypeGraphQL.ArgsType()
export class GroupByTrasladoArgs {
  @TypeGraphQL.Field(_type => TrasladoWhereInput, {
    nullable: true
  })
  where?: TrasladoWhereInput | undefined;

  @TypeGraphQL.Field(_type => [TrasladoOrderByWithAggregationInput], {
    nullable: true
  })
  orderBy?: TrasladoOrderByWithAggregationInput[] | undefined;

  @TypeGraphQL.Field(_type => [TrasladoScalarFieldEnum], {
    nullable: false
  })
  by!: Array<"id" | "confirmacion" | "fechaEnvio" | "fechaConfirmacion" | "sedeId" | "sedeOrigenId" | "sedeDestinoId">;

  @TypeGraphQL.Field(_type => TrasladoScalarWhereWithAggregatesInput, {
    nullable: true
  })
  having?: TrasladoScalarWhereWithAggregatesInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;
}

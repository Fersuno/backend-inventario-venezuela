import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { PrecioVentaCreateInput } from "../../../inputs/PrecioVentaCreateInput";
import { PrecioVentaUpdateInput } from "../../../inputs/PrecioVentaUpdateInput";
import { PrecioVentaWhereUniqueInput } from "../../../inputs/PrecioVentaWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpsertPrecioVentaArgs {
  @TypeGraphQL.Field(_type => PrecioVentaWhereUniqueInput, {
    nullable: false
  })
  where!: PrecioVentaWhereUniqueInput;

  @TypeGraphQL.Field(_type => PrecioVentaCreateInput, {
    nullable: false
  })
  create!: PrecioVentaCreateInput;

  @TypeGraphQL.Field(_type => PrecioVentaUpdateInput, {
    nullable: false
  })
  update!: PrecioVentaUpdateInput;
}

import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { PrecioVentaUpdateInput } from "../../../inputs/PrecioVentaUpdateInput";
import { PrecioVentaWhereUniqueInput } from "../../../inputs/PrecioVentaWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpdatePrecioVentaArgs {
  @TypeGraphQL.Field(_type => PrecioVentaUpdateInput, {
    nullable: false
  })
  data!: PrecioVentaUpdateInput;

  @TypeGraphQL.Field(_type => PrecioVentaWhereUniqueInput, {
    nullable: false
  })
  where!: PrecioVentaWhereUniqueInput;
}

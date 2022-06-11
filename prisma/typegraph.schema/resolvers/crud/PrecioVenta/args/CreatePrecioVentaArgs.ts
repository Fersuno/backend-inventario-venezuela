import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { PrecioVentaCreateInput } from "../../../inputs/PrecioVentaCreateInput";

@TypeGraphQL.ArgsType()
export class CreatePrecioVentaArgs {
  @TypeGraphQL.Field(_type => PrecioVentaCreateInput, {
    nullable: false
  })
  data!: PrecioVentaCreateInput;
}

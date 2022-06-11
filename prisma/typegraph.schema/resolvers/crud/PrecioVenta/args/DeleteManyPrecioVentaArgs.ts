import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { PrecioVentaWhereInput } from "../../../inputs/PrecioVentaWhereInput";

@TypeGraphQL.ArgsType()
export class DeleteManyPrecioVentaArgs {
  @TypeGraphQL.Field(_type => PrecioVentaWhereInput, {
    nullable: true
  })
  where?: PrecioVentaWhereInput | undefined;
}

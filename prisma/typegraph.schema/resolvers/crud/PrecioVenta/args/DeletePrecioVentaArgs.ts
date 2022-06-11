import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { PrecioVentaWhereUniqueInput } from "../../../inputs/PrecioVentaWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class DeletePrecioVentaArgs {
  @TypeGraphQL.Field(_type => PrecioVentaWhereUniqueInput, {
    nullable: false
  })
  where!: PrecioVentaWhereUniqueInput;
}

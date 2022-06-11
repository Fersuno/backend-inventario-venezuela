import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { PrecioAlmacenWhereInput } from "../../../inputs/PrecioAlmacenWhereInput";

@TypeGraphQL.ArgsType()
export class DeleteManyPrecioAlmacenArgs {
  @TypeGraphQL.Field(_type => PrecioAlmacenWhereInput, {
    nullable: true
  })
  where?: PrecioAlmacenWhereInput | undefined;
}

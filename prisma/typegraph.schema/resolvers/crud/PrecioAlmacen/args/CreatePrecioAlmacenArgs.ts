import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { PrecioAlmacenCreateInput } from "../../../inputs/PrecioAlmacenCreateInput";

@TypeGraphQL.ArgsType()
export class CreatePrecioAlmacenArgs {
  @TypeGraphQL.Field(_type => PrecioAlmacenCreateInput, {
    nullable: false
  })
  data!: PrecioAlmacenCreateInput;
}

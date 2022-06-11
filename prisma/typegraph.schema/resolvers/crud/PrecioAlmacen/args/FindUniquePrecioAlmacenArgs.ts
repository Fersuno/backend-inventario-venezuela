import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { PrecioAlmacenWhereUniqueInput } from "../../../inputs/PrecioAlmacenWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class FindUniquePrecioAlmacenArgs {
  @TypeGraphQL.Field(_type => PrecioAlmacenWhereUniqueInput, {
    nullable: false
  })
  where!: PrecioAlmacenWhereUniqueInput;
}

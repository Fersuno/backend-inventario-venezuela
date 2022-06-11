import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { PrecioAlmacenCreateInput } from "../../../inputs/PrecioAlmacenCreateInput";
import { PrecioAlmacenUpdateInput } from "../../../inputs/PrecioAlmacenUpdateInput";
import { PrecioAlmacenWhereUniqueInput } from "../../../inputs/PrecioAlmacenWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpsertPrecioAlmacenArgs {
  @TypeGraphQL.Field(_type => PrecioAlmacenWhereUniqueInput, {
    nullable: false
  })
  where!: PrecioAlmacenWhereUniqueInput;

  @TypeGraphQL.Field(_type => PrecioAlmacenCreateInput, {
    nullable: false
  })
  create!: PrecioAlmacenCreateInput;

  @TypeGraphQL.Field(_type => PrecioAlmacenUpdateInput, {
    nullable: false
  })
  update!: PrecioAlmacenUpdateInput;
}

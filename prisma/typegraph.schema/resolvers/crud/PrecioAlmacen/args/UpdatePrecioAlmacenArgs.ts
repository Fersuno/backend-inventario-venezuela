import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { PrecioAlmacenUpdateInput } from "../../../inputs/PrecioAlmacenUpdateInput";
import { PrecioAlmacenWhereUniqueInput } from "../../../inputs/PrecioAlmacenWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpdatePrecioAlmacenArgs {
  @TypeGraphQL.Field(_type => PrecioAlmacenUpdateInput, {
    nullable: false
  })
  data!: PrecioAlmacenUpdateInput;

  @TypeGraphQL.Field(_type => PrecioAlmacenWhereUniqueInput, {
    nullable: false
  })
  where!: PrecioAlmacenWhereUniqueInput;
}

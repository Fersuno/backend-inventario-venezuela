import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { PrecioAlmacenUpdateManyMutationInput } from "../../../inputs/PrecioAlmacenUpdateManyMutationInput";
import { PrecioAlmacenWhereInput } from "../../../inputs/PrecioAlmacenWhereInput";

@TypeGraphQL.ArgsType()
export class UpdateManyPrecioAlmacenArgs {
  @TypeGraphQL.Field(_type => PrecioAlmacenUpdateManyMutationInput, {
    nullable: false
  })
  data!: PrecioAlmacenUpdateManyMutationInput;

  @TypeGraphQL.Field(_type => PrecioAlmacenWhereInput, {
    nullable: true
  })
  where?: PrecioAlmacenWhereInput | undefined;
}

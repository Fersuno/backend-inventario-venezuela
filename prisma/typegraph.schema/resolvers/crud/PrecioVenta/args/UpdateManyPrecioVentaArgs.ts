import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { PrecioVentaUpdateManyMutationInput } from "../../../inputs/PrecioVentaUpdateManyMutationInput";
import { PrecioVentaWhereInput } from "../../../inputs/PrecioVentaWhereInput";

@TypeGraphQL.ArgsType()
export class UpdateManyPrecioVentaArgs {
  @TypeGraphQL.Field(_type => PrecioVentaUpdateManyMutationInput, {
    nullable: false
  })
  data!: PrecioVentaUpdateManyMutationInput;

  @TypeGraphQL.Field(_type => PrecioVentaWhereInput, {
    nullable: true
  })
  where?: PrecioVentaWhereInput | undefined;
}

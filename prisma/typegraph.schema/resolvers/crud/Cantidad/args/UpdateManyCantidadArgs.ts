import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { CantidadUpdateManyMutationInput } from "../../../inputs/CantidadUpdateManyMutationInput";
import { CantidadWhereInput } from "../../../inputs/CantidadWhereInput";

@TypeGraphQL.ArgsType()
export class UpdateManyCantidadArgs {
  @TypeGraphQL.Field(_type => CantidadUpdateManyMutationInput, {
    nullable: false
  })
  data!: CantidadUpdateManyMutationInput;

  @TypeGraphQL.Field(_type => CantidadWhereInput, {
    nullable: true
  })
  where?: CantidadWhereInput | undefined;
}

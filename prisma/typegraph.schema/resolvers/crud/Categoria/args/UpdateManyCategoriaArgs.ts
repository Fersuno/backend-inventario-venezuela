import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { CategoriaUpdateManyMutationInput } from "../../../inputs/CategoriaUpdateManyMutationInput";
import { CategoriaWhereInput } from "../../../inputs/CategoriaWhereInput";

@TypeGraphQL.ArgsType()
export class UpdateManyCategoriaArgs {
  @TypeGraphQL.Field(_type => CategoriaUpdateManyMutationInput, {
    nullable: false
  })
  data!: CategoriaUpdateManyMutationInput;

  @TypeGraphQL.Field(_type => CategoriaWhereInput, {
    nullable: true
  })
  where?: CategoriaWhereInput | undefined;
}

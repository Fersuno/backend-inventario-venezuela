import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { SubcategoriaUpdateManyMutationInput } from "../../../inputs/SubcategoriaUpdateManyMutationInput";
import { SubcategoriaWhereInput } from "../../../inputs/SubcategoriaWhereInput";

@TypeGraphQL.ArgsType()
export class UpdateManySubcategoriaArgs {
  @TypeGraphQL.Field(_type => SubcategoriaUpdateManyMutationInput, {
    nullable: false
  })
  data!: SubcategoriaUpdateManyMutationInput;

  @TypeGraphQL.Field(_type => SubcategoriaWhereInput, {
    nullable: true
  })
  where?: SubcategoriaWhereInput | undefined;
}

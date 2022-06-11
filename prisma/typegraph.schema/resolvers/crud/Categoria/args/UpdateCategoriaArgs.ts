import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { CategoriaUpdateInput } from "../../../inputs/CategoriaUpdateInput";
import { CategoriaWhereUniqueInput } from "../../../inputs/CategoriaWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpdateCategoriaArgs {
  @TypeGraphQL.Field(_type => CategoriaUpdateInput, {
    nullable: false
  })
  data!: CategoriaUpdateInput;

  @TypeGraphQL.Field(_type => CategoriaWhereUniqueInput, {
    nullable: false
  })
  where!: CategoriaWhereUniqueInput;
}

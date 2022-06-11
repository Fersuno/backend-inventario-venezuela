import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { CategoriaCreateInput } from "../../../inputs/CategoriaCreateInput";
import { CategoriaUpdateInput } from "../../../inputs/CategoriaUpdateInput";
import { CategoriaWhereUniqueInput } from "../../../inputs/CategoriaWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpsertCategoriaArgs {
  @TypeGraphQL.Field(_type => CategoriaWhereUniqueInput, {
    nullable: false
  })
  where!: CategoriaWhereUniqueInput;

  @TypeGraphQL.Field(_type => CategoriaCreateInput, {
    nullable: false
  })
  create!: CategoriaCreateInput;

  @TypeGraphQL.Field(_type => CategoriaUpdateInput, {
    nullable: false
  })
  update!: CategoriaUpdateInput;
}

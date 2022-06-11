import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { SubcategoriaCreateInput } from "../../../inputs/SubcategoriaCreateInput";
import { SubcategoriaUpdateInput } from "../../../inputs/SubcategoriaUpdateInput";
import { SubcategoriaWhereUniqueInput } from "../../../inputs/SubcategoriaWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpsertSubcategoriaArgs {
  @TypeGraphQL.Field(_type => SubcategoriaWhereUniqueInput, {
    nullable: false
  })
  where!: SubcategoriaWhereUniqueInput;

  @TypeGraphQL.Field(_type => SubcategoriaCreateInput, {
    nullable: false
  })
  create!: SubcategoriaCreateInput;

  @TypeGraphQL.Field(_type => SubcategoriaUpdateInput, {
    nullable: false
  })
  update!: SubcategoriaUpdateInput;
}

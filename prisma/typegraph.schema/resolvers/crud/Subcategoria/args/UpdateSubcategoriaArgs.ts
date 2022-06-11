import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { SubcategoriaUpdateInput } from "../../../inputs/SubcategoriaUpdateInput";
import { SubcategoriaWhereUniqueInput } from "../../../inputs/SubcategoriaWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpdateSubcategoriaArgs {
  @TypeGraphQL.Field(_type => SubcategoriaUpdateInput, {
    nullable: false
  })
  data!: SubcategoriaUpdateInput;

  @TypeGraphQL.Field(_type => SubcategoriaWhereUniqueInput, {
    nullable: false
  })
  where!: SubcategoriaWhereUniqueInput;
}

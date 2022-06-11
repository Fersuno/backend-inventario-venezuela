import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { CategoriaWhereUniqueInput } from "../../../inputs/CategoriaWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class DeleteCategoriaArgs {
  @TypeGraphQL.Field(_type => CategoriaWhereUniqueInput, {
    nullable: false
  })
  where!: CategoriaWhereUniqueInput;
}

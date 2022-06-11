import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { SubcategoriaWhereUniqueInput } from "../../../inputs/SubcategoriaWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class DeleteSubcategoriaArgs {
  @TypeGraphQL.Field(_type => SubcategoriaWhereUniqueInput, {
    nullable: false
  })
  where!: SubcategoriaWhereUniqueInput;
}

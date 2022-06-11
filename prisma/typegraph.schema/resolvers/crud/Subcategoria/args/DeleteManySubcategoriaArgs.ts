import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { SubcategoriaWhereInput } from "../../../inputs/SubcategoriaWhereInput";

@TypeGraphQL.ArgsType()
export class DeleteManySubcategoriaArgs {
  @TypeGraphQL.Field(_type => SubcategoriaWhereInput, {
    nullable: true
  })
  where?: SubcategoriaWhereInput | undefined;
}

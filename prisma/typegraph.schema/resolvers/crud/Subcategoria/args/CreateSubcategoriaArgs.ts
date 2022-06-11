import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { SubcategoriaCreateInput } from "../../../inputs/SubcategoriaCreateInput";

@TypeGraphQL.ArgsType()
export class CreateSubcategoriaArgs {
  @TypeGraphQL.Field(_type => SubcategoriaCreateInput, {
    nullable: false
  })
  data!: SubcategoriaCreateInput;
}

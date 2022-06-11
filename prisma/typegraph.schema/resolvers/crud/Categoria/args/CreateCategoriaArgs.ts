import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { CategoriaCreateInput } from "../../../inputs/CategoriaCreateInput";

@TypeGraphQL.ArgsType()
export class CreateCategoriaArgs {
  @TypeGraphQL.Field(_type => CategoriaCreateInput, {
    nullable: false
  })
  data!: CategoriaCreateInput;
}

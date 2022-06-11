import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { CategoriaWhereInput } from "../../../inputs/CategoriaWhereInput";

@TypeGraphQL.ArgsType()
export class DeleteManyCategoriaArgs {
  @TypeGraphQL.Field(_type => CategoriaWhereInput, {
    nullable: true
  })
  where?: CategoriaWhereInput | undefined;
}

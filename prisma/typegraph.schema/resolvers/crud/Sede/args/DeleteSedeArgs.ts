import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { SedeWhereUniqueInput } from "../../../inputs/SedeWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class DeleteSedeArgs {
  @TypeGraphQL.Field(_type => SedeWhereUniqueInput, {
    nullable: false
  })
  where!: SedeWhereUniqueInput;
}

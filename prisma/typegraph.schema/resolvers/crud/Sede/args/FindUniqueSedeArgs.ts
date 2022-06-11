import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { SedeWhereUniqueInput } from "../../../inputs/SedeWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class FindUniqueSedeArgs {
  @TypeGraphQL.Field(_type => SedeWhereUniqueInput, {
    nullable: false
  })
  where!: SedeWhereUniqueInput;
}

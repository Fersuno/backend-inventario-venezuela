import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { SedeCreateInput } from "../../../inputs/SedeCreateInput";

@TypeGraphQL.ArgsType()
export class CreateSedeArgs {
  @TypeGraphQL.Field(_type => SedeCreateInput, {
    nullable: false
  })
  data!: SedeCreateInput;
}

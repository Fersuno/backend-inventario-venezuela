import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { OrigenCreateInput } from "../../../inputs/OrigenCreateInput";

@TypeGraphQL.ArgsType()
export class CreateOrigenArgs {
  @TypeGraphQL.Field(_type => OrigenCreateInput, {
    nullable: false
  })
  data!: OrigenCreateInput;
}

import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { OrigenWhereUniqueInput } from "../../../inputs/OrigenWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class FindUniqueOrigenArgs {
  @TypeGraphQL.Field(_type => OrigenWhereUniqueInput, {
    nullable: false
  })
  where!: OrigenWhereUniqueInput;
}

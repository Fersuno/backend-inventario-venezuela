import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { TrasladoWhereUniqueInput } from "../../../inputs/TrasladoWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class FindUniqueTrasladoArgs {
  @TypeGraphQL.Field(_type => TrasladoWhereUniqueInput, {
    nullable: false
  })
  where!: TrasladoWhereUniqueInput;
}

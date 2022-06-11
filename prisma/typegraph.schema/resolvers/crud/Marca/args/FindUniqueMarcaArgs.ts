import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { MarcaWhereUniqueInput } from "../../../inputs/MarcaWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class FindUniqueMarcaArgs {
  @TypeGraphQL.Field(_type => MarcaWhereUniqueInput, {
    nullable: false
  })
  where!: MarcaWhereUniqueInput;
}

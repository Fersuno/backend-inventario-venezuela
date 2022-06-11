import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { EstadoWhereUniqueInput } from "../../../inputs/EstadoWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class FindUniqueEstadoArgs {
  @TypeGraphQL.Field(_type => EstadoWhereUniqueInput, {
    nullable: false
  })
  where!: EstadoWhereUniqueInput;
}

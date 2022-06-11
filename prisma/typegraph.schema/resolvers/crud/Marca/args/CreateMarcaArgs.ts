import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { MarcaCreateInput } from "../../../inputs/MarcaCreateInput";

@TypeGraphQL.ArgsType()
export class CreateMarcaArgs {
  @TypeGraphQL.Field(_type => MarcaCreateInput, {
    nullable: false
  })
  data!: MarcaCreateInput;
}

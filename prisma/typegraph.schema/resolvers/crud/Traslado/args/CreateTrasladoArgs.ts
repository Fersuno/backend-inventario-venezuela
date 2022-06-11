import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { TrasladoCreateInput } from "../../../inputs/TrasladoCreateInput";

@TypeGraphQL.ArgsType()
export class CreateTrasladoArgs {
  @TypeGraphQL.Field(_type => TrasladoCreateInput, {
    nullable: false
  })
  data!: TrasladoCreateInput;
}

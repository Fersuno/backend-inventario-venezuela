import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { CantidadCreateInput } from "../../../inputs/CantidadCreateInput";

@TypeGraphQL.ArgsType()
export class CreateCantidadArgs {
  @TypeGraphQL.Field(_type => CantidadCreateInput, {
    nullable: false
  })
  data!: CantidadCreateInput;
}

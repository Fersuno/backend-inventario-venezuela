import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { EstadoCreateInput } from "../../../inputs/EstadoCreateInput";

@TypeGraphQL.ArgsType()
export class CreateEstadoArgs {
  @TypeGraphQL.Field(_type => EstadoCreateInput, {
    nullable: false
  })
  data!: EstadoCreateInput;
}

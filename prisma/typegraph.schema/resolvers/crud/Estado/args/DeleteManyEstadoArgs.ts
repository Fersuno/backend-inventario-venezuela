import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { EstadoWhereInput } from "../../../inputs/EstadoWhereInput";

@TypeGraphQL.ArgsType()
export class DeleteManyEstadoArgs {
  @TypeGraphQL.Field(_type => EstadoWhereInput, {
    nullable: true
  })
  where?: EstadoWhereInput | undefined;
}

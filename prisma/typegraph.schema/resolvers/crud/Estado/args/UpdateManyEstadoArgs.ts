import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { EstadoUpdateManyMutationInput } from "../../../inputs/EstadoUpdateManyMutationInput";
import { EstadoWhereInput } from "../../../inputs/EstadoWhereInput";

@TypeGraphQL.ArgsType()
export class UpdateManyEstadoArgs {
  @TypeGraphQL.Field(_type => EstadoUpdateManyMutationInput, {
    nullable: false
  })
  data!: EstadoUpdateManyMutationInput;

  @TypeGraphQL.Field(_type => EstadoWhereInput, {
    nullable: true
  })
  where?: EstadoWhereInput | undefined;
}

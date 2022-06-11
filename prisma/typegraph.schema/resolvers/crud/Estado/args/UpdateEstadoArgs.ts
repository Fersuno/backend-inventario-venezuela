import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { EstadoUpdateInput } from "../../../inputs/EstadoUpdateInput";
import { EstadoWhereUniqueInput } from "../../../inputs/EstadoWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpdateEstadoArgs {
  @TypeGraphQL.Field(_type => EstadoUpdateInput, {
    nullable: false
  })
  data!: EstadoUpdateInput;

  @TypeGraphQL.Field(_type => EstadoWhereUniqueInput, {
    nullable: false
  })
  where!: EstadoWhereUniqueInput;
}

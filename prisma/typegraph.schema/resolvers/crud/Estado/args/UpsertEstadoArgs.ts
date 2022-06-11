import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { EstadoCreateInput } from "../../../inputs/EstadoCreateInput";
import { EstadoUpdateInput } from "../../../inputs/EstadoUpdateInput";
import { EstadoWhereUniqueInput } from "../../../inputs/EstadoWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpsertEstadoArgs {
  @TypeGraphQL.Field(_type => EstadoWhereUniqueInput, {
    nullable: false
  })
  where!: EstadoWhereUniqueInput;

  @TypeGraphQL.Field(_type => EstadoCreateInput, {
    nullable: false
  })
  create!: EstadoCreateInput;

  @TypeGraphQL.Field(_type => EstadoUpdateInput, {
    nullable: false
  })
  update!: EstadoUpdateInput;
}

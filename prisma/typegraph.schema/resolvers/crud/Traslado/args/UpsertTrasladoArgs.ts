import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { TrasladoCreateInput } from "../../../inputs/TrasladoCreateInput";
import { TrasladoUpdateInput } from "../../../inputs/TrasladoUpdateInput";
import { TrasladoWhereUniqueInput } from "../../../inputs/TrasladoWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpsertTrasladoArgs {
  @TypeGraphQL.Field(_type => TrasladoWhereUniqueInput, {
    nullable: false
  })
  where!: TrasladoWhereUniqueInput;

  @TypeGraphQL.Field(_type => TrasladoCreateInput, {
    nullable: false
  })
  create!: TrasladoCreateInput;

  @TypeGraphQL.Field(_type => TrasladoUpdateInput, {
    nullable: false
  })
  update!: TrasladoUpdateInput;
}

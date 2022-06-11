import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { SedeCreateInput } from "../../../inputs/SedeCreateInput";
import { SedeUpdateInput } from "../../../inputs/SedeUpdateInput";
import { SedeWhereUniqueInput } from "../../../inputs/SedeWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpsertSedeArgs {
  @TypeGraphQL.Field(_type => SedeWhereUniqueInput, {
    nullable: false
  })
  where!: SedeWhereUniqueInput;

  @TypeGraphQL.Field(_type => SedeCreateInput, {
    nullable: false
  })
  create!: SedeCreateInput;

  @TypeGraphQL.Field(_type => SedeUpdateInput, {
    nullable: false
  })
  update!: SedeUpdateInput;
}

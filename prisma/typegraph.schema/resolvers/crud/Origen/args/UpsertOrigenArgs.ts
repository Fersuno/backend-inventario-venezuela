import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { OrigenCreateInput } from "../../../inputs/OrigenCreateInput";
import { OrigenUpdateInput } from "../../../inputs/OrigenUpdateInput";
import { OrigenWhereUniqueInput } from "../../../inputs/OrigenWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpsertOrigenArgs {
  @TypeGraphQL.Field(_type => OrigenWhereUniqueInput, {
    nullable: false
  })
  where!: OrigenWhereUniqueInput;

  @TypeGraphQL.Field(_type => OrigenCreateInput, {
    nullable: false
  })
  create!: OrigenCreateInput;

  @TypeGraphQL.Field(_type => OrigenUpdateInput, {
    nullable: false
  })
  update!: OrigenUpdateInput;
}

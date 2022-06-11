import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { OrigenUpdateInput } from "../../../inputs/OrigenUpdateInput";
import { OrigenWhereUniqueInput } from "../../../inputs/OrigenWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpdateOrigenArgs {
  @TypeGraphQL.Field(_type => OrigenUpdateInput, {
    nullable: false
  })
  data!: OrigenUpdateInput;

  @TypeGraphQL.Field(_type => OrigenWhereUniqueInput, {
    nullable: false
  })
  where!: OrigenWhereUniqueInput;
}

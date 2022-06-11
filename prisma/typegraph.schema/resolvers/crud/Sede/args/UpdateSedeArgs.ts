import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { SedeUpdateInput } from "../../../inputs/SedeUpdateInput";
import { SedeWhereUniqueInput } from "../../../inputs/SedeWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpdateSedeArgs {
  @TypeGraphQL.Field(_type => SedeUpdateInput, {
    nullable: false
  })
  data!: SedeUpdateInput;

  @TypeGraphQL.Field(_type => SedeWhereUniqueInput, {
    nullable: false
  })
  where!: SedeWhereUniqueInput;
}

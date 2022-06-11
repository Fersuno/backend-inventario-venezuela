import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { TrasladoUpdateInput } from "../../../inputs/TrasladoUpdateInput";
import { TrasladoWhereUniqueInput } from "../../../inputs/TrasladoWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpdateTrasladoArgs {
  @TypeGraphQL.Field(_type => TrasladoUpdateInput, {
    nullable: false
  })
  data!: TrasladoUpdateInput;

  @TypeGraphQL.Field(_type => TrasladoWhereUniqueInput, {
    nullable: false
  })
  where!: TrasladoWhereUniqueInput;
}

import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { OrigenWhereInput } from "../../../inputs/OrigenWhereInput";

@TypeGraphQL.ArgsType()
export class DeleteManyOrigenArgs {
  @TypeGraphQL.Field(_type => OrigenWhereInput, {
    nullable: true
  })
  where?: OrigenWhereInput | undefined;
}

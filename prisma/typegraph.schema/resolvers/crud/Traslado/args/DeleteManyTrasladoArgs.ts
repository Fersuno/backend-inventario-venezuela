import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { TrasladoWhereInput } from "../../../inputs/TrasladoWhereInput";

@TypeGraphQL.ArgsType()
export class DeleteManyTrasladoArgs {
  @TypeGraphQL.Field(_type => TrasladoWhereInput, {
    nullable: true
  })
  where?: TrasladoWhereInput | undefined;
}

import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { SedeWhereInput } from "../../../inputs/SedeWhereInput";

@TypeGraphQL.ArgsType()
export class DeleteManySedeArgs {
  @TypeGraphQL.Field(_type => SedeWhereInput, {
    nullable: true
  })
  where?: SedeWhereInput | undefined;
}

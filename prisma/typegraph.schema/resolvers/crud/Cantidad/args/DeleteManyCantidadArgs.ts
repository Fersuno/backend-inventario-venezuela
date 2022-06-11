import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { CantidadWhereInput } from "../../../inputs/CantidadWhereInput";

@TypeGraphQL.ArgsType()
export class DeleteManyCantidadArgs {
  @TypeGraphQL.Field(_type => CantidadWhereInput, {
    nullable: true
  })
  where?: CantidadWhereInput | undefined;
}

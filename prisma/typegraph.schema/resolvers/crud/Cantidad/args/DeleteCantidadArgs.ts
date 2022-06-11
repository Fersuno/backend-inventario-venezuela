import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { CantidadWhereUniqueInput } from "../../../inputs/CantidadWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class DeleteCantidadArgs {
  @TypeGraphQL.Field(_type => CantidadWhereUniqueInput, {
    nullable: false
  })
  where!: CantidadWhereUniqueInput;
}

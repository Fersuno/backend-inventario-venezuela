import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { CantidadUpdateInput } from "../../../inputs/CantidadUpdateInput";
import { CantidadWhereUniqueInput } from "../../../inputs/CantidadWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpdateCantidadArgs {
  @TypeGraphQL.Field(_type => CantidadUpdateInput, {
    nullable: false
  })
  data!: CantidadUpdateInput;

  @TypeGraphQL.Field(_type => CantidadWhereUniqueInput, {
    nullable: false
  })
  where!: CantidadWhereUniqueInput;
}

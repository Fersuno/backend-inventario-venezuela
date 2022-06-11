import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { CantidadCreateInput } from "../../../inputs/CantidadCreateInput";
import { CantidadUpdateInput } from "../../../inputs/CantidadUpdateInput";
import { CantidadWhereUniqueInput } from "../../../inputs/CantidadWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpsertCantidadArgs {
  @TypeGraphQL.Field(_type => CantidadWhereUniqueInput, {
    nullable: false
  })
  where!: CantidadWhereUniqueInput;

  @TypeGraphQL.Field(_type => CantidadCreateInput, {
    nullable: false
  })
  create!: CantidadCreateInput;

  @TypeGraphQL.Field(_type => CantidadUpdateInput, {
    nullable: false
  })
  update!: CantidadUpdateInput;
}

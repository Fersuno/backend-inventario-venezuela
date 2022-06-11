import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { MarcaCreateInput } from "../../../inputs/MarcaCreateInput";
import { MarcaUpdateInput } from "../../../inputs/MarcaUpdateInput";
import { MarcaWhereUniqueInput } from "../../../inputs/MarcaWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpsertMarcaArgs {
  @TypeGraphQL.Field(_type => MarcaWhereUniqueInput, {
    nullable: false
  })
  where!: MarcaWhereUniqueInput;

  @TypeGraphQL.Field(_type => MarcaCreateInput, {
    nullable: false
  })
  create!: MarcaCreateInput;

  @TypeGraphQL.Field(_type => MarcaUpdateInput, {
    nullable: false
  })
  update!: MarcaUpdateInput;
}

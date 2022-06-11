import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { MarcaUpdateInput } from "../../../inputs/MarcaUpdateInput";
import { MarcaWhereUniqueInput } from "../../../inputs/MarcaWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpdateMarcaArgs {
  @TypeGraphQL.Field(_type => MarcaUpdateInput, {
    nullable: false
  })
  data!: MarcaUpdateInput;

  @TypeGraphQL.Field(_type => MarcaWhereUniqueInput, {
    nullable: false
  })
  where!: MarcaWhereUniqueInput;
}

import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { MarcaWhereInput } from "../../../inputs/MarcaWhereInput";

@TypeGraphQL.ArgsType()
export class DeleteManyMarcaArgs {
  @TypeGraphQL.Field(_type => MarcaWhereInput, {
    nullable: true
  })
  where?: MarcaWhereInput | undefined;
}

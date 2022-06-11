import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { MarcaUpdateManyMutationInput } from "../../../inputs/MarcaUpdateManyMutationInput";
import { MarcaWhereInput } from "../../../inputs/MarcaWhereInput";

@TypeGraphQL.ArgsType()
export class UpdateManyMarcaArgs {
  @TypeGraphQL.Field(_type => MarcaUpdateManyMutationInput, {
    nullable: false
  })
  data!: MarcaUpdateManyMutationInput;

  @TypeGraphQL.Field(_type => MarcaWhereInput, {
    nullable: true
  })
  where?: MarcaWhereInput | undefined;
}

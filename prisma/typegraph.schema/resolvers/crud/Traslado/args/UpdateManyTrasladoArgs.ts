import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { TrasladoUpdateManyMutationInput } from "../../../inputs/TrasladoUpdateManyMutationInput";
import { TrasladoWhereInput } from "../../../inputs/TrasladoWhereInput";

@TypeGraphQL.ArgsType()
export class UpdateManyTrasladoArgs {
  @TypeGraphQL.Field(_type => TrasladoUpdateManyMutationInput, {
    nullable: false
  })
  data!: TrasladoUpdateManyMutationInput;

  @TypeGraphQL.Field(_type => TrasladoWhereInput, {
    nullable: true
  })
  where?: TrasladoWhereInput | undefined;
}

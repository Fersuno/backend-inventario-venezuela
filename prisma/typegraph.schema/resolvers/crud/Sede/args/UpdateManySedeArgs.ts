import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { SedeUpdateManyMutationInput } from "../../../inputs/SedeUpdateManyMutationInput";
import { SedeWhereInput } from "../../../inputs/SedeWhereInput";

@TypeGraphQL.ArgsType()
export class UpdateManySedeArgs {
  @TypeGraphQL.Field(_type => SedeUpdateManyMutationInput, {
    nullable: false
  })
  data!: SedeUpdateManyMutationInput;

  @TypeGraphQL.Field(_type => SedeWhereInput, {
    nullable: true
  })
  where?: SedeWhereInput | undefined;
}

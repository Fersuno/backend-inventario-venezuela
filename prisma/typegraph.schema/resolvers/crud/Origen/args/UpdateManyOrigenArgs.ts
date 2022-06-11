import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { OrigenUpdateManyMutationInput } from "../../../inputs/OrigenUpdateManyMutationInput";
import { OrigenWhereInput } from "../../../inputs/OrigenWhereInput";

@TypeGraphQL.ArgsType()
export class UpdateManyOrigenArgs {
  @TypeGraphQL.Field(_type => OrigenUpdateManyMutationInput, {
    nullable: false
  })
  data!: OrigenUpdateManyMutationInput;

  @TypeGraphQL.Field(_type => OrigenWhereInput, {
    nullable: true
  })
  where?: OrigenWhereInput | undefined;
}

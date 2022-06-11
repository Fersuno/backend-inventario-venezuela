import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { TrasladoOrderByWithRelationInput } from "../../../inputs/TrasladoOrderByWithRelationInput";
import { TrasladoWhereInput } from "../../../inputs/TrasladoWhereInput";
import { TrasladoWhereUniqueInput } from "../../../inputs/TrasladoWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class AggregateTrasladoArgs {
  @TypeGraphQL.Field(_type => TrasladoWhereInput, {
    nullable: true
  })
  where?: TrasladoWhereInput | undefined;

  @TypeGraphQL.Field(_type => [TrasladoOrderByWithRelationInput], {
    nullable: true
  })
  orderBy?: TrasladoOrderByWithRelationInput[] | undefined;

  @TypeGraphQL.Field(_type => TrasladoWhereUniqueInput, {
    nullable: true
  })
  cursor?: TrasladoWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;
}

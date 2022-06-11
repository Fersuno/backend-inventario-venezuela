import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { OrigenOrderByWithRelationInput } from "../../../inputs/OrigenOrderByWithRelationInput";
import { OrigenWhereInput } from "../../../inputs/OrigenWhereInput";
import { OrigenWhereUniqueInput } from "../../../inputs/OrigenWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class AggregateOrigenArgs {
  @TypeGraphQL.Field(_type => OrigenWhereInput, {
    nullable: true
  })
  where?: OrigenWhereInput | undefined;

  @TypeGraphQL.Field(_type => [OrigenOrderByWithRelationInput], {
    nullable: true
  })
  orderBy?: OrigenOrderByWithRelationInput[] | undefined;

  @TypeGraphQL.Field(_type => OrigenWhereUniqueInput, {
    nullable: true
  })
  cursor?: OrigenWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;
}

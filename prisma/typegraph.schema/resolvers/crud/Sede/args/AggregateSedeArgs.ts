import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { SedeOrderByWithRelationInput } from "../../../inputs/SedeOrderByWithRelationInput";
import { SedeWhereInput } from "../../../inputs/SedeWhereInput";
import { SedeWhereUniqueInput } from "../../../inputs/SedeWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class AggregateSedeArgs {
  @TypeGraphQL.Field(_type => SedeWhereInput, {
    nullable: true
  })
  where?: SedeWhereInput | undefined;

  @TypeGraphQL.Field(_type => [SedeOrderByWithRelationInput], {
    nullable: true
  })
  orderBy?: SedeOrderByWithRelationInput[] | undefined;

  @TypeGraphQL.Field(_type => SedeWhereUniqueInput, {
    nullable: true
  })
  cursor?: SedeWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;
}

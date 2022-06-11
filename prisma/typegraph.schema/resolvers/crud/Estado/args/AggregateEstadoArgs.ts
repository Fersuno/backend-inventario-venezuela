import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { EstadoOrderByWithRelationInput } from "../../../inputs/EstadoOrderByWithRelationInput";
import { EstadoWhereInput } from "../../../inputs/EstadoWhereInput";
import { EstadoWhereUniqueInput } from "../../../inputs/EstadoWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class AggregateEstadoArgs {
  @TypeGraphQL.Field(_type => EstadoWhereInput, {
    nullable: true
  })
  where?: EstadoWhereInput | undefined;

  @TypeGraphQL.Field(_type => [EstadoOrderByWithRelationInput], {
    nullable: true
  })
  orderBy?: EstadoOrderByWithRelationInput[] | undefined;

  @TypeGraphQL.Field(_type => EstadoWhereUniqueInput, {
    nullable: true
  })
  cursor?: EstadoWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;
}

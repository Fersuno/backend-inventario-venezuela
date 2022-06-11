import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { CantidadOrderByWithRelationInput } from "../../../inputs/CantidadOrderByWithRelationInput";
import { CantidadWhereInput } from "../../../inputs/CantidadWhereInput";
import { CantidadWhereUniqueInput } from "../../../inputs/CantidadWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class AggregateCantidadArgs {
  @TypeGraphQL.Field(_type => CantidadWhereInput, {
    nullable: true
  })
  where?: CantidadWhereInput | undefined;

  @TypeGraphQL.Field(_type => [CantidadOrderByWithRelationInput], {
    nullable: true
  })
  orderBy?: CantidadOrderByWithRelationInput[] | undefined;

  @TypeGraphQL.Field(_type => CantidadWhereUniqueInput, {
    nullable: true
  })
  cursor?: CantidadWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;
}

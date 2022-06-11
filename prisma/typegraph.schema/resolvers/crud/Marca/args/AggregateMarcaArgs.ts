import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { MarcaOrderByWithRelationInput } from "../../../inputs/MarcaOrderByWithRelationInput";
import { MarcaWhereInput } from "../../../inputs/MarcaWhereInput";
import { MarcaWhereUniqueInput } from "../../../inputs/MarcaWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class AggregateMarcaArgs {
  @TypeGraphQL.Field(_type => MarcaWhereInput, {
    nullable: true
  })
  where?: MarcaWhereInput | undefined;

  @TypeGraphQL.Field(_type => [MarcaOrderByWithRelationInput], {
    nullable: true
  })
  orderBy?: MarcaOrderByWithRelationInput[] | undefined;

  @TypeGraphQL.Field(_type => MarcaWhereUniqueInput, {
    nullable: true
  })
  cursor?: MarcaWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;
}

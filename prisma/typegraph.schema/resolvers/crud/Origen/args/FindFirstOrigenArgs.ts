import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { OrigenOrderByWithRelationInput } from "../../../inputs/OrigenOrderByWithRelationInput";
import { OrigenWhereInput } from "../../../inputs/OrigenWhereInput";
import { OrigenWhereUniqueInput } from "../../../inputs/OrigenWhereUniqueInput";
import { OrigenScalarFieldEnum } from "../../../../enums/OrigenScalarFieldEnum";

@TypeGraphQL.ArgsType()
export class FindFirstOrigenArgs {
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

  @TypeGraphQL.Field(_type => [OrigenScalarFieldEnum], {
    nullable: true
  })
  distinct?: Array<"id" | "nombre" | "porcentaje"> | undefined;
}

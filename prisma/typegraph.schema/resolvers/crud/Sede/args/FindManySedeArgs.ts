import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { SedeOrderByWithRelationInput } from "../../../inputs/SedeOrderByWithRelationInput";
import { SedeWhereInput } from "../../../inputs/SedeWhereInput";
import { SedeWhereUniqueInput } from "../../../inputs/SedeWhereUniqueInput";
import { SedeScalarFieldEnum } from "../../../../enums/SedeScalarFieldEnum";

@TypeGraphQL.ArgsType()
export class FindManySedeArgs {
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

  @TypeGraphQL.Field(_type => [SedeScalarFieldEnum], {
    nullable: true
  })
  distinct?: Array<"id" | "nombre" | "estadoId"> | undefined;
}

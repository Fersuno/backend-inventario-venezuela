import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { CategoriaOrderByWithRelationInput } from "../../../inputs/CategoriaOrderByWithRelationInput";
import { CategoriaWhereInput } from "../../../inputs/CategoriaWhereInput";
import { CategoriaWhereUniqueInput } from "../../../inputs/CategoriaWhereUniqueInput";
import { CategoriaScalarFieldEnum } from "../../../../enums/CategoriaScalarFieldEnum";

@TypeGraphQL.ArgsType()
export class FindFirstCategoriaArgs {
  @TypeGraphQL.Field(_type => CategoriaWhereInput, {
    nullable: true
  })
  where?: CategoriaWhereInput | undefined;

  @TypeGraphQL.Field(_type => [CategoriaOrderByWithRelationInput], {
    nullable: true
  })
  orderBy?: CategoriaOrderByWithRelationInput[] | undefined;

  @TypeGraphQL.Field(_type => CategoriaWhereUniqueInput, {
    nullable: true
  })
  cursor?: CategoriaWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;

  @TypeGraphQL.Field(_type => [CategoriaScalarFieldEnum], {
    nullable: true
  })
  distinct?: Array<"id" | "nombre"> | undefined;
}

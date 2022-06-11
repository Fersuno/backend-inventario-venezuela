import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { SubcategoriaOrderByWithRelationInput } from "../../../inputs/SubcategoriaOrderByWithRelationInput";
import { SubcategoriaWhereInput } from "../../../inputs/SubcategoriaWhereInput";
import { SubcategoriaWhereUniqueInput } from "../../../inputs/SubcategoriaWhereUniqueInput";
import { SubcategoriaScalarFieldEnum } from "../../../../enums/SubcategoriaScalarFieldEnum";

@TypeGraphQL.ArgsType()
export class CategoriaSubcategoriaArgs {
  @TypeGraphQL.Field(_type => SubcategoriaWhereInput, {
    nullable: true
  })
  where?: SubcategoriaWhereInput | undefined;

  @TypeGraphQL.Field(_type => [SubcategoriaOrderByWithRelationInput], {
    nullable: true
  })
  orderBy?: SubcategoriaOrderByWithRelationInput[] | undefined;

  @TypeGraphQL.Field(_type => SubcategoriaWhereUniqueInput, {
    nullable: true
  })
  cursor?: SubcategoriaWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;

  @TypeGraphQL.Field(_type => [SubcategoriaScalarFieldEnum], {
    nullable: true
  })
  distinct?: Array<"id" | "nombre" | "categoriaId"> | undefined;
}

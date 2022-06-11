import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { CategoriaRelationFilter } from "../inputs/CategoriaRelationFilter";
import { IntFilter } from "../inputs/IntFilter";
import { ProductoListRelationFilter } from "../inputs/ProductoListRelationFilter";
import { StringFilter } from "../inputs/StringFilter";

@TypeGraphQL.InputType("SubcategoriaWhereInput", {
  isAbstract: true
})
export class SubcategoriaWhereInput {
  @TypeGraphQL.Field(_type => [SubcategoriaWhereInput], {
    nullable: true
  })
  AND?: SubcategoriaWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [SubcategoriaWhereInput], {
    nullable: true
  })
  OR?: SubcategoriaWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [SubcategoriaWhereInput], {
    nullable: true
  })
  NOT?: SubcategoriaWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => IntFilter, {
    nullable: true
  })
  id?: IntFilter | undefined;

  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true
  })
  nombre?: StringFilter | undefined;

  @TypeGraphQL.Field(_type => IntFilter, {
    nullable: true
  })
  categoriaId?: IntFilter | undefined;

  @TypeGraphQL.Field(_type => CategoriaRelationFilter, {
    nullable: true
  })
  categoria?: CategoriaRelationFilter | undefined;

  @TypeGraphQL.Field(_type => ProductoListRelationFilter, {
    nullable: true
  })
  Producto?: ProductoListRelationFilter | undefined;
}

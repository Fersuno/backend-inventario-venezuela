import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { IntFilter } from "../inputs/IntFilter";
import { ProductoListRelationFilter } from "../inputs/ProductoListRelationFilter";
import { StringFilter } from "../inputs/StringFilter";
import { SubcategoriaListRelationFilter } from "../inputs/SubcategoriaListRelationFilter";

@TypeGraphQL.InputType("CategoriaWhereInput", {
  isAbstract: true
})
export class CategoriaWhereInput {
  @TypeGraphQL.Field(_type => [CategoriaWhereInput], {
    nullable: true
  })
  AND?: CategoriaWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [CategoriaWhereInput], {
    nullable: true
  })
  OR?: CategoriaWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [CategoriaWhereInput], {
    nullable: true
  })
  NOT?: CategoriaWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => IntFilter, {
    nullable: true
  })
  id?: IntFilter | undefined;

  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true
  })
  nombre?: StringFilter | undefined;

  @TypeGraphQL.Field(_type => SubcategoriaListRelationFilter, {
    nullable: true
  })
  subcategoria?: SubcategoriaListRelationFilter | undefined;

  @TypeGraphQL.Field(_type => ProductoListRelationFilter, {
    nullable: true
  })
  producto?: ProductoListRelationFilter | undefined;
}

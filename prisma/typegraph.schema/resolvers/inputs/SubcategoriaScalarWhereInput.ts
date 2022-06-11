import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { IntFilter } from "../inputs/IntFilter";
import { StringFilter } from "../inputs/StringFilter";

@TypeGraphQL.InputType("SubcategoriaScalarWhereInput", {
  isAbstract: true
})
export class SubcategoriaScalarWhereInput {
  @TypeGraphQL.Field(_type => [SubcategoriaScalarWhereInput], {
    nullable: true
  })
  AND?: SubcategoriaScalarWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [SubcategoriaScalarWhereInput], {
    nullable: true
  })
  OR?: SubcategoriaScalarWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [SubcategoriaScalarWhereInput], {
    nullable: true
  })
  NOT?: SubcategoriaScalarWhereInput[] | undefined;

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
}

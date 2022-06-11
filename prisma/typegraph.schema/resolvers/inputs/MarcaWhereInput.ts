import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { IntFilter } from "../inputs/IntFilter";
import { ProductoListRelationFilter } from "../inputs/ProductoListRelationFilter";
import { StringFilter } from "../inputs/StringFilter";

@TypeGraphQL.InputType("MarcaWhereInput", {
  isAbstract: true
})
export class MarcaWhereInput {
  @TypeGraphQL.Field(_type => [MarcaWhereInput], {
    nullable: true
  })
  AND?: MarcaWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [MarcaWhereInput], {
    nullable: true
  })
  OR?: MarcaWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [MarcaWhereInput], {
    nullable: true
  })
  NOT?: MarcaWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => IntFilter, {
    nullable: true
  })
  id?: IntFilter | undefined;

  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true
  })
  nombre?: StringFilter | undefined;

  @TypeGraphQL.Field(_type => ProductoListRelationFilter, {
    nullable: true
  })
  Producto?: ProductoListRelationFilter | undefined;
}

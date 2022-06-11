import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { IntFilter } from "../inputs/IntFilter";
import { ProductoRelationFilter } from "../inputs/ProductoRelationFilter";
import { SedeRelationFilter } from "../inputs/SedeRelationFilter";

@TypeGraphQL.InputType("CantidadWhereInput", {
  isAbstract: true
})
export class CantidadWhereInput {
  @TypeGraphQL.Field(_type => [CantidadWhereInput], {
    nullable: true
  })
  AND?: CantidadWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [CantidadWhereInput], {
    nullable: true
  })
  OR?: CantidadWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [CantidadWhereInput], {
    nullable: true
  })
  NOT?: CantidadWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => IntFilter, {
    nullable: true
  })
  id?: IntFilter | undefined;

  @TypeGraphQL.Field(_type => IntFilter, {
    nullable: true
  })
  cantidad?: IntFilter | undefined;

  @TypeGraphQL.Field(_type => IntFilter, {
    nullable: true
  })
  sedeId?: IntFilter | undefined;

  @TypeGraphQL.Field(_type => IntFilter, {
    nullable: true
  })
  productoId?: IntFilter | undefined;

  @TypeGraphQL.Field(_type => SedeRelationFilter, {
    nullable: true
  })
  sede?: SedeRelationFilter | undefined;

  @TypeGraphQL.Field(_type => ProductoRelationFilter, {
    nullable: true
  })
  producto?: ProductoRelationFilter | undefined;
}

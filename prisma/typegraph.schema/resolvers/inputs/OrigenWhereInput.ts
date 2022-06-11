import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { IntFilter } from "../inputs/IntFilter";
import { ProductoListRelationFilter } from "../inputs/ProductoListRelationFilter";
import { StringFilter } from "../inputs/StringFilter";

@TypeGraphQL.InputType("OrigenWhereInput", {
  isAbstract: true
})
export class OrigenWhereInput {
  @TypeGraphQL.Field(_type => [OrigenWhereInput], {
    nullable: true
  })
  AND?: OrigenWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [OrigenWhereInput], {
    nullable: true
  })
  OR?: OrigenWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [OrigenWhereInput], {
    nullable: true
  })
  NOT?: OrigenWhereInput[] | undefined;

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
  porcentaje?: IntFilter | undefined;

  @TypeGraphQL.Field(_type => ProductoListRelationFilter, {
    nullable: true
  })
  producto?: ProductoListRelationFilter | undefined;
}

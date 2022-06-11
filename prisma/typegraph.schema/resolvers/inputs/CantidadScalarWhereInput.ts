import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { IntFilter } from "../inputs/IntFilter";

@TypeGraphQL.InputType("CantidadScalarWhereInput", {
  isAbstract: true
})
export class CantidadScalarWhereInput {
  @TypeGraphQL.Field(_type => [CantidadScalarWhereInput], {
    nullable: true
  })
  AND?: CantidadScalarWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [CantidadScalarWhereInput], {
    nullable: true
  })
  OR?: CantidadScalarWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [CantidadScalarWhereInput], {
    nullable: true
  })
  NOT?: CantidadScalarWhereInput[] | undefined;

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
}

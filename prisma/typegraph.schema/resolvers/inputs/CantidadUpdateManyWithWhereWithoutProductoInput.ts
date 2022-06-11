import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { CantidadScalarWhereInput } from "../inputs/CantidadScalarWhereInput";
import { CantidadUpdateManyMutationInput } from "../inputs/CantidadUpdateManyMutationInput";

@TypeGraphQL.InputType("CantidadUpdateManyWithWhereWithoutProductoInput", {
  isAbstract: true
})
export class CantidadUpdateManyWithWhereWithoutProductoInput {
  @TypeGraphQL.Field(_type => CantidadScalarWhereInput, {
    nullable: false
  })
  where!: CantidadScalarWhereInput;

  @TypeGraphQL.Field(_type => CantidadUpdateManyMutationInput, {
    nullable: false
  })
  data!: CantidadUpdateManyMutationInput;
}

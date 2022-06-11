import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { SubcategoriaScalarWhereInput } from "../inputs/SubcategoriaScalarWhereInput";
import { SubcategoriaUpdateManyMutationInput } from "../inputs/SubcategoriaUpdateManyMutationInput";

@TypeGraphQL.InputType("SubcategoriaUpdateManyWithWhereWithoutCategoriaInput", {
  isAbstract: true
})
export class SubcategoriaUpdateManyWithWhereWithoutCategoriaInput {
  @TypeGraphQL.Field(_type => SubcategoriaScalarWhereInput, {
    nullable: false
  })
  where!: SubcategoriaScalarWhereInput;

  @TypeGraphQL.Field(_type => SubcategoriaUpdateManyMutationInput, {
    nullable: false
  })
  data!: SubcategoriaUpdateManyMutationInput;
}

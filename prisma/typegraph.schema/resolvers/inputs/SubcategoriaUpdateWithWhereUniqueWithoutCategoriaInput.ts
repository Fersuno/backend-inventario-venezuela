import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { SubcategoriaUpdateWithoutCategoriaInput } from "../inputs/SubcategoriaUpdateWithoutCategoriaInput";
import { SubcategoriaWhereUniqueInput } from "../inputs/SubcategoriaWhereUniqueInput";

@TypeGraphQL.InputType("SubcategoriaUpdateWithWhereUniqueWithoutCategoriaInput", {
  isAbstract: true
})
export class SubcategoriaUpdateWithWhereUniqueWithoutCategoriaInput {
  @TypeGraphQL.Field(_type => SubcategoriaWhereUniqueInput, {
    nullable: false
  })
  where!: SubcategoriaWhereUniqueInput;

  @TypeGraphQL.Field(_type => SubcategoriaUpdateWithoutCategoriaInput, {
    nullable: false
  })
  data!: SubcategoriaUpdateWithoutCategoriaInput;
}

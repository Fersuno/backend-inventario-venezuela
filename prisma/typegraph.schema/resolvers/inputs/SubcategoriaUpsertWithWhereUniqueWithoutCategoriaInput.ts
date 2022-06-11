import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { SubcategoriaCreateWithoutCategoriaInput } from "../inputs/SubcategoriaCreateWithoutCategoriaInput";
import { SubcategoriaUpdateWithoutCategoriaInput } from "../inputs/SubcategoriaUpdateWithoutCategoriaInput";
import { SubcategoriaWhereUniqueInput } from "../inputs/SubcategoriaWhereUniqueInput";

@TypeGraphQL.InputType("SubcategoriaUpsertWithWhereUniqueWithoutCategoriaInput", {
  isAbstract: true
})
export class SubcategoriaUpsertWithWhereUniqueWithoutCategoriaInput {
  @TypeGraphQL.Field(_type => SubcategoriaWhereUniqueInput, {
    nullable: false
  })
  where!: SubcategoriaWhereUniqueInput;

  @TypeGraphQL.Field(_type => SubcategoriaUpdateWithoutCategoriaInput, {
    nullable: false
  })
  update!: SubcategoriaUpdateWithoutCategoriaInput;

  @TypeGraphQL.Field(_type => SubcategoriaCreateWithoutCategoriaInput, {
    nullable: false
  })
  create!: SubcategoriaCreateWithoutCategoriaInput;
}

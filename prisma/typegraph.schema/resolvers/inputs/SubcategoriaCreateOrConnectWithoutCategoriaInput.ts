import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { SubcategoriaCreateWithoutCategoriaInput } from "../inputs/SubcategoriaCreateWithoutCategoriaInput";
import { SubcategoriaWhereUniqueInput } from "../inputs/SubcategoriaWhereUniqueInput";

@TypeGraphQL.InputType("SubcategoriaCreateOrConnectWithoutCategoriaInput", {
  isAbstract: true
})
export class SubcategoriaCreateOrConnectWithoutCategoriaInput {
  @TypeGraphQL.Field(_type => SubcategoriaWhereUniqueInput, {
    nullable: false
  })
  where!: SubcategoriaWhereUniqueInput;

  @TypeGraphQL.Field(_type => SubcategoriaCreateWithoutCategoriaInput, {
    nullable: false
  })
  create!: SubcategoriaCreateWithoutCategoriaInput;
}

import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { CategoriaCreateWithoutSubcategoriaInput } from "../inputs/CategoriaCreateWithoutSubcategoriaInput";
import { CategoriaWhereUniqueInput } from "../inputs/CategoriaWhereUniqueInput";

@TypeGraphQL.InputType("CategoriaCreateOrConnectWithoutSubcategoriaInput", {
  isAbstract: true
})
export class CategoriaCreateOrConnectWithoutSubcategoriaInput {
  @TypeGraphQL.Field(_type => CategoriaWhereUniqueInput, {
    nullable: false
  })
  where!: CategoriaWhereUniqueInput;

  @TypeGraphQL.Field(_type => CategoriaCreateWithoutSubcategoriaInput, {
    nullable: false
  })
  create!: CategoriaCreateWithoutSubcategoriaInput;
}

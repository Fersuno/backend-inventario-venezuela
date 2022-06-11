import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { CategoriaCreateOrConnectWithoutSubcategoriaInput } from "../inputs/CategoriaCreateOrConnectWithoutSubcategoriaInput";
import { CategoriaCreateWithoutSubcategoriaInput } from "../inputs/CategoriaCreateWithoutSubcategoriaInput";
import { CategoriaWhereUniqueInput } from "../inputs/CategoriaWhereUniqueInput";

@TypeGraphQL.InputType("CategoriaCreateNestedOneWithoutSubcategoriaInput", {
  isAbstract: true
})
export class CategoriaCreateNestedOneWithoutSubcategoriaInput {
  @TypeGraphQL.Field(_type => CategoriaCreateWithoutSubcategoriaInput, {
    nullable: true
  })
  create?: CategoriaCreateWithoutSubcategoriaInput | undefined;

  @TypeGraphQL.Field(_type => CategoriaCreateOrConnectWithoutSubcategoriaInput, {
    nullable: true
  })
  connectOrCreate?: CategoriaCreateOrConnectWithoutSubcategoriaInput | undefined;

  @TypeGraphQL.Field(_type => CategoriaWhereUniqueInput, {
    nullable: true
  })
  connect?: CategoriaWhereUniqueInput | undefined;
}

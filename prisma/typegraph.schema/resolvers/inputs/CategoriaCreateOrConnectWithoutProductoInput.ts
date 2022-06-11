import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { CategoriaCreateWithoutProductoInput } from "../inputs/CategoriaCreateWithoutProductoInput";
import { CategoriaWhereUniqueInput } from "../inputs/CategoriaWhereUniqueInput";

@TypeGraphQL.InputType("CategoriaCreateOrConnectWithoutProductoInput", {
  isAbstract: true
})
export class CategoriaCreateOrConnectWithoutProductoInput {
  @TypeGraphQL.Field(_type => CategoriaWhereUniqueInput, {
    nullable: false
  })
  where!: CategoriaWhereUniqueInput;

  @TypeGraphQL.Field(_type => CategoriaCreateWithoutProductoInput, {
    nullable: false
  })
  create!: CategoriaCreateWithoutProductoInput;
}

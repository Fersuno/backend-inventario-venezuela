import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { SubcategoriaCreateWithoutProductoInput } from "../inputs/SubcategoriaCreateWithoutProductoInput";
import { SubcategoriaWhereUniqueInput } from "../inputs/SubcategoriaWhereUniqueInput";

@TypeGraphQL.InputType("SubcategoriaCreateOrConnectWithoutProductoInput", {
  isAbstract: true
})
export class SubcategoriaCreateOrConnectWithoutProductoInput {
  @TypeGraphQL.Field(_type => SubcategoriaWhereUniqueInput, {
    nullable: false
  })
  where!: SubcategoriaWhereUniqueInput;

  @TypeGraphQL.Field(_type => SubcategoriaCreateWithoutProductoInput, {
    nullable: false
  })
  create!: SubcategoriaCreateWithoutProductoInput;
}

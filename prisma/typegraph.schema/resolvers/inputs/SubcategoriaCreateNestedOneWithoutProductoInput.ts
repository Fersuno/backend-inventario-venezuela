import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { SubcategoriaCreateOrConnectWithoutProductoInput } from "../inputs/SubcategoriaCreateOrConnectWithoutProductoInput";
import { SubcategoriaCreateWithoutProductoInput } from "../inputs/SubcategoriaCreateWithoutProductoInput";
import { SubcategoriaWhereUniqueInput } from "../inputs/SubcategoriaWhereUniqueInput";

@TypeGraphQL.InputType("SubcategoriaCreateNestedOneWithoutProductoInput", {
  isAbstract: true
})
export class SubcategoriaCreateNestedOneWithoutProductoInput {
  @TypeGraphQL.Field(_type => SubcategoriaCreateWithoutProductoInput, {
    nullable: true
  })
  create?: SubcategoriaCreateWithoutProductoInput | undefined;

  @TypeGraphQL.Field(_type => SubcategoriaCreateOrConnectWithoutProductoInput, {
    nullable: true
  })
  connectOrCreate?: SubcategoriaCreateOrConnectWithoutProductoInput | undefined;

  @TypeGraphQL.Field(_type => SubcategoriaWhereUniqueInput, {
    nullable: true
  })
  connect?: SubcategoriaWhereUniqueInput | undefined;
}

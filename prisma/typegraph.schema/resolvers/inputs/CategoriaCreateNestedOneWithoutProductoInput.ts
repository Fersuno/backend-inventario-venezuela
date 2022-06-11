import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { CategoriaCreateOrConnectWithoutProductoInput } from "../inputs/CategoriaCreateOrConnectWithoutProductoInput";
import { CategoriaCreateWithoutProductoInput } from "../inputs/CategoriaCreateWithoutProductoInput";
import { CategoriaWhereUniqueInput } from "../inputs/CategoriaWhereUniqueInput";

@TypeGraphQL.InputType("CategoriaCreateNestedOneWithoutProductoInput", {
  isAbstract: true
})
export class CategoriaCreateNestedOneWithoutProductoInput {
  @TypeGraphQL.Field(_type => CategoriaCreateWithoutProductoInput, {
    nullable: true
  })
  create?: CategoriaCreateWithoutProductoInput | undefined;

  @TypeGraphQL.Field(_type => CategoriaCreateOrConnectWithoutProductoInput, {
    nullable: true
  })
  connectOrCreate?: CategoriaCreateOrConnectWithoutProductoInput | undefined;

  @TypeGraphQL.Field(_type => CategoriaWhereUniqueInput, {
    nullable: true
  })
  connect?: CategoriaWhereUniqueInput | undefined;
}

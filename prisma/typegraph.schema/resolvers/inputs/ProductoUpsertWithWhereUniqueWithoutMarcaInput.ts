import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ProductoCreateWithoutMarcaInput } from "../inputs/ProductoCreateWithoutMarcaInput";
import { ProductoUpdateWithoutMarcaInput } from "../inputs/ProductoUpdateWithoutMarcaInput";
import { ProductoWhereUniqueInput } from "../inputs/ProductoWhereUniqueInput";

@TypeGraphQL.InputType("ProductoUpsertWithWhereUniqueWithoutMarcaInput", {
  isAbstract: true
})
export class ProductoUpsertWithWhereUniqueWithoutMarcaInput {
  @TypeGraphQL.Field(_type => ProductoWhereUniqueInput, {
    nullable: false
  })
  where!: ProductoWhereUniqueInput;

  @TypeGraphQL.Field(_type => ProductoUpdateWithoutMarcaInput, {
    nullable: false
  })
  update!: ProductoUpdateWithoutMarcaInput;

  @TypeGraphQL.Field(_type => ProductoCreateWithoutMarcaInput, {
    nullable: false
  })
  create!: ProductoCreateWithoutMarcaInput;
}

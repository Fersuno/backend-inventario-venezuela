import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ProductoUpdateWithoutMarcaInput } from "../inputs/ProductoUpdateWithoutMarcaInput";
import { ProductoWhereUniqueInput } from "../inputs/ProductoWhereUniqueInput";

@TypeGraphQL.InputType("ProductoUpdateWithWhereUniqueWithoutMarcaInput", {
  isAbstract: true
})
export class ProductoUpdateWithWhereUniqueWithoutMarcaInput {
  @TypeGraphQL.Field(_type => ProductoWhereUniqueInput, {
    nullable: false
  })
  where!: ProductoWhereUniqueInput;

  @TypeGraphQL.Field(_type => ProductoUpdateWithoutMarcaInput, {
    nullable: false
  })
  data!: ProductoUpdateWithoutMarcaInput;
}

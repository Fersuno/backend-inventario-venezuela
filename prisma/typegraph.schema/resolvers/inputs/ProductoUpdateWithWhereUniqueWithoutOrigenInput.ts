import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ProductoUpdateWithoutOrigenInput } from "../inputs/ProductoUpdateWithoutOrigenInput";
import { ProductoWhereUniqueInput } from "../inputs/ProductoWhereUniqueInput";

@TypeGraphQL.InputType("ProductoUpdateWithWhereUniqueWithoutOrigenInput", {
  isAbstract: true
})
export class ProductoUpdateWithWhereUniqueWithoutOrigenInput {
  @TypeGraphQL.Field(_type => ProductoWhereUniqueInput, {
    nullable: false
  })
  where!: ProductoWhereUniqueInput;

  @TypeGraphQL.Field(_type => ProductoUpdateWithoutOrigenInput, {
    nullable: false
  })
  data!: ProductoUpdateWithoutOrigenInput;
}

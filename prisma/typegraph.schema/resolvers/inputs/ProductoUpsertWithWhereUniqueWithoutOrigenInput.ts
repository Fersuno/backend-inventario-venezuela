import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ProductoCreateWithoutOrigenInput } from "../inputs/ProductoCreateWithoutOrigenInput";
import { ProductoUpdateWithoutOrigenInput } from "../inputs/ProductoUpdateWithoutOrigenInput";
import { ProductoWhereUniqueInput } from "../inputs/ProductoWhereUniqueInput";

@TypeGraphQL.InputType("ProductoUpsertWithWhereUniqueWithoutOrigenInput", {
  isAbstract: true
})
export class ProductoUpsertWithWhereUniqueWithoutOrigenInput {
  @TypeGraphQL.Field(_type => ProductoWhereUniqueInput, {
    nullable: false
  })
  where!: ProductoWhereUniqueInput;

  @TypeGraphQL.Field(_type => ProductoUpdateWithoutOrigenInput, {
    nullable: false
  })
  update!: ProductoUpdateWithoutOrigenInput;

  @TypeGraphQL.Field(_type => ProductoCreateWithoutOrigenInput, {
    nullable: false
  })
  create!: ProductoCreateWithoutOrigenInput;
}

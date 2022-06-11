import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ProductoCreateWithoutOrigenInput } from "../inputs/ProductoCreateWithoutOrigenInput";
import { ProductoWhereUniqueInput } from "../inputs/ProductoWhereUniqueInput";

@TypeGraphQL.InputType("ProductoCreateOrConnectWithoutOrigenInput", {
  isAbstract: true
})
export class ProductoCreateOrConnectWithoutOrigenInput {
  @TypeGraphQL.Field(_type => ProductoWhereUniqueInput, {
    nullable: false
  })
  where!: ProductoWhereUniqueInput;

  @TypeGraphQL.Field(_type => ProductoCreateWithoutOrigenInput, {
    nullable: false
  })
  create!: ProductoCreateWithoutOrigenInput;
}

import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ProductoCreateManyOrigenInputEnvelope } from "../inputs/ProductoCreateManyOrigenInputEnvelope";
import { ProductoCreateOrConnectWithoutOrigenInput } from "../inputs/ProductoCreateOrConnectWithoutOrigenInput";
import { ProductoCreateWithoutOrigenInput } from "../inputs/ProductoCreateWithoutOrigenInput";
import { ProductoWhereUniqueInput } from "../inputs/ProductoWhereUniqueInput";

@TypeGraphQL.InputType("ProductoCreateNestedManyWithoutOrigenInput", {
  isAbstract: true
})
export class ProductoCreateNestedManyWithoutOrigenInput {
  @TypeGraphQL.Field(_type => [ProductoCreateWithoutOrigenInput], {
    nullable: true
  })
  create?: ProductoCreateWithoutOrigenInput[] | undefined;

  @TypeGraphQL.Field(_type => [ProductoCreateOrConnectWithoutOrigenInput], {
    nullable: true
  })
  connectOrCreate?: ProductoCreateOrConnectWithoutOrigenInput[] | undefined;

  @TypeGraphQL.Field(_type => ProductoCreateManyOrigenInputEnvelope, {
    nullable: true
  })
  createMany?: ProductoCreateManyOrigenInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [ProductoWhereUniqueInput], {
    nullable: true
  })
  connect?: ProductoWhereUniqueInput[] | undefined;
}

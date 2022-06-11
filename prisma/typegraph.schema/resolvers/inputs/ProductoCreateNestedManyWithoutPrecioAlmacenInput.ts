import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ProductoCreateManyPrecioAlmacenInputEnvelope } from "../inputs/ProductoCreateManyPrecioAlmacenInputEnvelope";
import { ProductoCreateOrConnectWithoutPrecioAlmacenInput } from "../inputs/ProductoCreateOrConnectWithoutPrecioAlmacenInput";
import { ProductoCreateWithoutPrecioAlmacenInput } from "../inputs/ProductoCreateWithoutPrecioAlmacenInput";
import { ProductoWhereUniqueInput } from "../inputs/ProductoWhereUniqueInput";

@TypeGraphQL.InputType("ProductoCreateNestedManyWithoutPrecioAlmacenInput", {
  isAbstract: true
})
export class ProductoCreateNestedManyWithoutPrecioAlmacenInput {
  @TypeGraphQL.Field(_type => [ProductoCreateWithoutPrecioAlmacenInput], {
    nullable: true
  })
  create?: ProductoCreateWithoutPrecioAlmacenInput[] | undefined;

  @TypeGraphQL.Field(_type => [ProductoCreateOrConnectWithoutPrecioAlmacenInput], {
    nullable: true
  })
  connectOrCreate?: ProductoCreateOrConnectWithoutPrecioAlmacenInput[] | undefined;

  @TypeGraphQL.Field(_type => ProductoCreateManyPrecioAlmacenInputEnvelope, {
    nullable: true
  })
  createMany?: ProductoCreateManyPrecioAlmacenInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [ProductoWhereUniqueInput], {
    nullable: true
  })
  connect?: ProductoWhereUniqueInput[] | undefined;
}

import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ProductoCreateManyCategoriaInputEnvelope } from "../inputs/ProductoCreateManyCategoriaInputEnvelope";
import { ProductoCreateOrConnectWithoutCategoriaInput } from "../inputs/ProductoCreateOrConnectWithoutCategoriaInput";
import { ProductoCreateWithoutCategoriaInput } from "../inputs/ProductoCreateWithoutCategoriaInput";
import { ProductoWhereUniqueInput } from "../inputs/ProductoWhereUniqueInput";

@TypeGraphQL.InputType("ProductoCreateNestedManyWithoutCategoriaInput", {
  isAbstract: true
})
export class ProductoCreateNestedManyWithoutCategoriaInput {
  @TypeGraphQL.Field(_type => [ProductoCreateWithoutCategoriaInput], {
    nullable: true
  })
  create?: ProductoCreateWithoutCategoriaInput[] | undefined;

  @TypeGraphQL.Field(_type => [ProductoCreateOrConnectWithoutCategoriaInput], {
    nullable: true
  })
  connectOrCreate?: ProductoCreateOrConnectWithoutCategoriaInput[] | undefined;

  @TypeGraphQL.Field(_type => ProductoCreateManyCategoriaInputEnvelope, {
    nullable: true
  })
  createMany?: ProductoCreateManyCategoriaInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [ProductoWhereUniqueInput], {
    nullable: true
  })
  connect?: ProductoWhereUniqueInput[] | undefined;
}

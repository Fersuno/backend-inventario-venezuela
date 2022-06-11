import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ProductoCreateManyMarcaInputEnvelope } from "../inputs/ProductoCreateManyMarcaInputEnvelope";
import { ProductoCreateOrConnectWithoutMarcaInput } from "../inputs/ProductoCreateOrConnectWithoutMarcaInput";
import { ProductoCreateWithoutMarcaInput } from "../inputs/ProductoCreateWithoutMarcaInput";
import { ProductoWhereUniqueInput } from "../inputs/ProductoWhereUniqueInput";

@TypeGraphQL.InputType("ProductoCreateNestedManyWithoutMarcaInput", {
  isAbstract: true
})
export class ProductoCreateNestedManyWithoutMarcaInput {
  @TypeGraphQL.Field(_type => [ProductoCreateWithoutMarcaInput], {
    nullable: true
  })
  create?: ProductoCreateWithoutMarcaInput[] | undefined;

  @TypeGraphQL.Field(_type => [ProductoCreateOrConnectWithoutMarcaInput], {
    nullable: true
  })
  connectOrCreate?: ProductoCreateOrConnectWithoutMarcaInput[] | undefined;

  @TypeGraphQL.Field(_type => ProductoCreateManyMarcaInputEnvelope, {
    nullable: true
  })
  createMany?: ProductoCreateManyMarcaInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [ProductoWhereUniqueInput], {
    nullable: true
  })
  connect?: ProductoWhereUniqueInput[] | undefined;
}

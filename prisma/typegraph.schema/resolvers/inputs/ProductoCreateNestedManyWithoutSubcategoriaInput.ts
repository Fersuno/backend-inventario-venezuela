import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ProductoCreateManySubcategoriaInputEnvelope } from "../inputs/ProductoCreateManySubcategoriaInputEnvelope";
import { ProductoCreateOrConnectWithoutSubcategoriaInput } from "../inputs/ProductoCreateOrConnectWithoutSubcategoriaInput";
import { ProductoCreateWithoutSubcategoriaInput } from "../inputs/ProductoCreateWithoutSubcategoriaInput";
import { ProductoWhereUniqueInput } from "../inputs/ProductoWhereUniqueInput";

@TypeGraphQL.InputType("ProductoCreateNestedManyWithoutSubcategoriaInput", {
  isAbstract: true
})
export class ProductoCreateNestedManyWithoutSubcategoriaInput {
  @TypeGraphQL.Field(_type => [ProductoCreateWithoutSubcategoriaInput], {
    nullable: true
  })
  create?: ProductoCreateWithoutSubcategoriaInput[] | undefined;

  @TypeGraphQL.Field(_type => [ProductoCreateOrConnectWithoutSubcategoriaInput], {
    nullable: true
  })
  connectOrCreate?: ProductoCreateOrConnectWithoutSubcategoriaInput[] | undefined;

  @TypeGraphQL.Field(_type => ProductoCreateManySubcategoriaInputEnvelope, {
    nullable: true
  })
  createMany?: ProductoCreateManySubcategoriaInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [ProductoWhereUniqueInput], {
    nullable: true
  })
  connect?: ProductoWhereUniqueInput[] | undefined;
}

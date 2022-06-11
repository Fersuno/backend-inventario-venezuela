import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ProductoScalarWhereInput } from "../inputs/ProductoScalarWhereInput";
import { ProductoUpdateManyMutationInput } from "../inputs/ProductoUpdateManyMutationInput";

@TypeGraphQL.InputType("ProductoUpdateManyWithWhereWithoutSubcategoriaInput", {
  isAbstract: true
})
export class ProductoUpdateManyWithWhereWithoutSubcategoriaInput {
  @TypeGraphQL.Field(_type => ProductoScalarWhereInput, {
    nullable: false
  })
  where!: ProductoScalarWhereInput;

  @TypeGraphQL.Field(_type => ProductoUpdateManyMutationInput, {
    nullable: false
  })
  data!: ProductoUpdateManyMutationInput;
}

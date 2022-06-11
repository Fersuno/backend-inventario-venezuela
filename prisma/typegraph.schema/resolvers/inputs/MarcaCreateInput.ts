import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ProductoCreateNestedManyWithoutMarcaInput } from "../inputs/ProductoCreateNestedManyWithoutMarcaInput";

@TypeGraphQL.InputType("MarcaCreateInput", {
  isAbstract: true
})
export class MarcaCreateInput {
  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  nombre!: string;

  @TypeGraphQL.Field(_type => ProductoCreateNestedManyWithoutMarcaInput, {
    nullable: true
  })
  Producto?: ProductoCreateNestedManyWithoutMarcaInput | undefined;
}

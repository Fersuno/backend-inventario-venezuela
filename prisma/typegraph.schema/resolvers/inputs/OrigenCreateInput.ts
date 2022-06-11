import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ProductoCreateNestedManyWithoutOrigenInput } from "../inputs/ProductoCreateNestedManyWithoutOrigenInput";

@TypeGraphQL.InputType("OrigenCreateInput", {
  isAbstract: true
})
export class OrigenCreateInput {
  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  nombre!: string;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  porcentaje!: number;

  @TypeGraphQL.Field(_type => ProductoCreateNestedManyWithoutOrigenInput, {
    nullable: true
  })
  producto?: ProductoCreateNestedManyWithoutOrigenInput | undefined;
}

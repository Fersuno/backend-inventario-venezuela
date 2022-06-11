import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ProductoCreateNestedManyWithoutPrecioVentaInput } from "../inputs/ProductoCreateNestedManyWithoutPrecioVentaInput";

@TypeGraphQL.InputType("PrecioVentaCreateInput", {
  isAbstract: true
})
export class PrecioVentaCreateInput {
  @TypeGraphQL.Field(_type => DecimalJSScalar, {
    nullable: false
  })
  a!: Prisma.Decimal;

  @TypeGraphQL.Field(_type => DecimalJSScalar, {
    nullable: true
  })
  aa?: Prisma.Decimal | undefined;

  @TypeGraphQL.Field(_type => DecimalJSScalar, {
    nullable: true
  })
  aaa?: Prisma.Decimal | undefined;

  @TypeGraphQL.Field(_type => DecimalJSScalar, {
    nullable: true
  })
  detal?: Prisma.Decimal | undefined;

  @TypeGraphQL.Field(_type => DecimalJSScalar, {
    nullable: true
  })
  instalacion?: Prisma.Decimal | undefined;

  @TypeGraphQL.Field(_type => ProductoCreateNestedManyWithoutPrecioVentaInput, {
    nullable: true
  })
  producto?: ProductoCreateNestedManyWithoutPrecioVentaInput | undefined;
}

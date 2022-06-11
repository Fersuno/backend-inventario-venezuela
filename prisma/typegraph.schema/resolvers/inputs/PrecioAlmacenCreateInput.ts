import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ProductoCreateNestedManyWithoutPrecioAlmacenInput } from "../inputs/ProductoCreateNestedManyWithoutPrecioAlmacenInput";

@TypeGraphQL.InputType("PrecioAlmacenCreateInput", {
  isAbstract: true
})
export class PrecioAlmacenCreateInput {
  @TypeGraphQL.Field(_type => DecimalJSScalar, {
    nullable: true
  })
  rmb?: Prisma.Decimal | undefined;

  @TypeGraphQL.Field(_type => DecimalJSScalar, {
    nullable: false
  })
  cif!: Prisma.Decimal;

  @TypeGraphQL.Field(_type => DecimalJSScalar, {
    nullable: true
  })
  mnj?: Prisma.Decimal | undefined;

  @TypeGraphQL.Field(_type => ProductoCreateNestedManyWithoutPrecioAlmacenInput, {
    nullable: true
  })
  producto?: ProductoCreateNestedManyWithoutPrecioAlmacenInput | undefined;
}

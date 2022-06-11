import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";

@TypeGraphQL.InputType("PrecioAlmacenCreateWithoutProductoInput", {
  isAbstract: true
})
export class PrecioAlmacenCreateWithoutProductoInput {
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
}

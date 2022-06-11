import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../scalars";
import { Producto } from "../models/Producto";
import { PrecioVentaCount } from "../resolvers/outputs/PrecioVentaCount";

@TypeGraphQL.ObjectType("PrecioVenta", {
  isAbstract: true
})
export class PrecioVenta {
  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  id!: number;

  @TypeGraphQL.Field(_type => DecimalJSScalar, {
    nullable: false
  })
  a!: Prisma.Decimal;

  @TypeGraphQL.Field(_type => DecimalJSScalar, {
    nullable: true
  })
  aa?: Prisma.Decimal | null;

  @TypeGraphQL.Field(_type => DecimalJSScalar, {
    nullable: true
  })
  aaa?: Prisma.Decimal | null;

  @TypeGraphQL.Field(_type => DecimalJSScalar, {
    nullable: true
  })
  detal?: Prisma.Decimal | null;

  @TypeGraphQL.Field(_type => DecimalJSScalar, {
    nullable: true
  })
  instalacion?: Prisma.Decimal | null;

  producto?: Producto[];

  @TypeGraphQL.Field(_type => PrecioVentaCount, {
    nullable: true
  })
  _count?: PrecioVentaCount | null;
}

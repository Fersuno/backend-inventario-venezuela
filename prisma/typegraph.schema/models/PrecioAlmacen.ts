import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../scalars";
import { Producto } from "../models/Producto";
import { PrecioAlmacenCount } from "../resolvers/outputs/PrecioAlmacenCount";

@TypeGraphQL.ObjectType("PrecioAlmacen", {
  isAbstract: true
})
export class PrecioAlmacen {
  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  id!: number;

  @TypeGraphQL.Field(_type => DecimalJSScalar, {
    nullable: true
  })
  rmb?: Prisma.Decimal | null;

  @TypeGraphQL.Field(_type => DecimalJSScalar, {
    nullable: false
  })
  cif!: Prisma.Decimal;

  @TypeGraphQL.Field(_type => DecimalJSScalar, {
    nullable: true
  })
  mnj?: Prisma.Decimal | null;

  producto?: Producto[];

  @TypeGraphQL.Field(_type => PrecioAlmacenCount, {
    nullable: true
  })
  _count?: PrecioAlmacenCount | null;
}

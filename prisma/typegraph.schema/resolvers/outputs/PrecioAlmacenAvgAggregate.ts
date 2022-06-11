import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";

@TypeGraphQL.ObjectType("PrecioAlmacenAvgAggregate", {
  isAbstract: true
})
export class PrecioAlmacenAvgAggregate {
  @TypeGraphQL.Field(_type => TypeGraphQL.Float, {
    nullable: true
  })
  id!: number | null;

  @TypeGraphQL.Field(_type => DecimalJSScalar, {
    nullable: true
  })
  rmb!: Prisma.Decimal | null;

  @TypeGraphQL.Field(_type => DecimalJSScalar, {
    nullable: true
  })
  cif!: Prisma.Decimal | null;

  @TypeGraphQL.Field(_type => DecimalJSScalar, {
    nullable: true
  })
  mnj!: Prisma.Decimal | null;
}

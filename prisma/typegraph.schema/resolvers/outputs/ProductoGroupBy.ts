import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ProductoAvgAggregate } from "../outputs/ProductoAvgAggregate";
import { ProductoCountAggregate } from "../outputs/ProductoCountAggregate";
import { ProductoMaxAggregate } from "../outputs/ProductoMaxAggregate";
import { ProductoMinAggregate } from "../outputs/ProductoMinAggregate";
import { ProductoSumAggregate } from "../outputs/ProductoSumAggregate";

@TypeGraphQL.ObjectType("ProductoGroupBy", {
  isAbstract: true
})
export class ProductoGroupBy {
  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  id!: number;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  modelo!: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  foto!: string;

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: false
  })
  cuenta!: boolean;

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: false
  })
  retirado!: boolean;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  cantidad!: number;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  marcaId!: number | null;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  origenId!: number;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  categoriaId!: number;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  subcategoriaId!: number | null;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  precioVentaId!: number;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  precioAlmacenId!: number;

  @TypeGraphQL.Field(_type => ProductoCountAggregate, {
    nullable: true
  })
  _count!: ProductoCountAggregate | null;

  @TypeGraphQL.Field(_type => ProductoAvgAggregate, {
    nullable: true
  })
  _avg!: ProductoAvgAggregate | null;

  @TypeGraphQL.Field(_type => ProductoSumAggregate, {
    nullable: true
  })
  _sum!: ProductoSumAggregate | null;

  @TypeGraphQL.Field(_type => ProductoMinAggregate, {
    nullable: true
  })
  _min!: ProductoMinAggregate | null;

  @TypeGraphQL.Field(_type => ProductoMaxAggregate, {
    nullable: true
  })
  _max!: ProductoMaxAggregate | null;
}

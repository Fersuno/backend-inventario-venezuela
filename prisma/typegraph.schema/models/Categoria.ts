import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../scalars";
import { Producto } from "../models/Producto";
import { Subcategoria } from "../models/Subcategoria";
import { CategoriaCount } from "../resolvers/outputs/CategoriaCount";

@TypeGraphQL.ObjectType("Categoria", {
  isAbstract: true
})
export class Categoria {
  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  id!: number;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  nombre!: string;

  subcategoria?: Subcategoria[];

  producto?: Producto[];

  @TypeGraphQL.Field(_type => CategoriaCount, {
    nullable: true
  })
  _count?: CategoriaCount | null;
}

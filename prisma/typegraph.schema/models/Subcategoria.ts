import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../scalars";
import { Categoria } from "../models/Categoria";
import { Producto } from "../models/Producto";
import { SubcategoriaCount } from "../resolvers/outputs/SubcategoriaCount";

@TypeGraphQL.ObjectType("Subcategoria", {
  isAbstract: true
})
export class Subcategoria {
  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  id!: number;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  nombre!: string;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  categoriaId!: number;

  categoria?: Categoria;

  Producto?: Producto[];

  @TypeGraphQL.Field(_type => SubcategoriaCount, {
    nullable: true
  })
  _count?: SubcategoriaCount | null;
}

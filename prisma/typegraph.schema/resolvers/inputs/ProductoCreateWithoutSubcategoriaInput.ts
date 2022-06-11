import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { CantidadCreateNestedManyWithoutProductoInput } from "../inputs/CantidadCreateNestedManyWithoutProductoInput";
import { CategoriaCreateNestedOneWithoutProductoInput } from "../inputs/CategoriaCreateNestedOneWithoutProductoInput";
import { MarcaCreateNestedOneWithoutProductoInput } from "../inputs/MarcaCreateNestedOneWithoutProductoInput";
import { OrigenCreateNestedOneWithoutProductoInput } from "../inputs/OrigenCreateNestedOneWithoutProductoInput";
import { PrecioAlmacenCreateNestedOneWithoutProductoInput } from "../inputs/PrecioAlmacenCreateNestedOneWithoutProductoInput";
import { PrecioVentaCreateNestedOneWithoutProductoInput } from "../inputs/PrecioVentaCreateNestedOneWithoutProductoInput";

@TypeGraphQL.InputType("ProductoCreateWithoutSubcategoriaInput", {
  isAbstract: true
})
export class ProductoCreateWithoutSubcategoriaInput {
  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  modelo?: string | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  foto!: string;

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  cuenta?: boolean | undefined;

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  retirado?: boolean | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  cantidad!: number;

  @TypeGraphQL.Field(_type => CantidadCreateNestedManyWithoutProductoInput, {
    nullable: true
  })
  Cantidad?: CantidadCreateNestedManyWithoutProductoInput | undefined;

  @TypeGraphQL.Field(_type => MarcaCreateNestedOneWithoutProductoInput, {
    nullable: true
  })
  marca?: MarcaCreateNestedOneWithoutProductoInput | undefined;

  @TypeGraphQL.Field(_type => OrigenCreateNestedOneWithoutProductoInput, {
    nullable: false
  })
  origen!: OrigenCreateNestedOneWithoutProductoInput;

  @TypeGraphQL.Field(_type => CategoriaCreateNestedOneWithoutProductoInput, {
    nullable: false
  })
  categoria!: CategoriaCreateNestedOneWithoutProductoInput;

  @TypeGraphQL.Field(_type => PrecioVentaCreateNestedOneWithoutProductoInput, {
    nullable: false
  })
  precioVenta!: PrecioVentaCreateNestedOneWithoutProductoInput;

  @TypeGraphQL.Field(_type => PrecioAlmacenCreateNestedOneWithoutProductoInput, {
    nullable: false
  })
  precioAlmacen!: PrecioAlmacenCreateNestedOneWithoutProductoInput;
}

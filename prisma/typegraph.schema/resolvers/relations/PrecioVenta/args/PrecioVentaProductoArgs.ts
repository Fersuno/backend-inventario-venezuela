import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { ProductoOrderByWithRelationInput } from "../../../inputs/ProductoOrderByWithRelationInput";
import { ProductoWhereInput } from "../../../inputs/ProductoWhereInput";
import { ProductoWhereUniqueInput } from "../../../inputs/ProductoWhereUniqueInput";
import { ProductoScalarFieldEnum } from "../../../../enums/ProductoScalarFieldEnum";

@TypeGraphQL.ArgsType()
export class PrecioVentaProductoArgs {
  @TypeGraphQL.Field(_type => ProductoWhereInput, {
    nullable: true
  })
  where?: ProductoWhereInput | undefined;

  @TypeGraphQL.Field(_type => [ProductoOrderByWithRelationInput], {
    nullable: true
  })
  orderBy?: ProductoOrderByWithRelationInput[] | undefined;

  @TypeGraphQL.Field(_type => ProductoWhereUniqueInput, {
    nullable: true
  })
  cursor?: ProductoWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;

  @TypeGraphQL.Field(_type => [ProductoScalarFieldEnum], {
    nullable: true
  })
  distinct?: Array<"id" | "modelo" | "foto" | "cuenta" | "retirado" | "cantidad" | "marcaId" | "origenId" | "categoriaId" | "subcategoriaId" | "precioVentaId" | "precioAlmacenId"> | undefined;
}

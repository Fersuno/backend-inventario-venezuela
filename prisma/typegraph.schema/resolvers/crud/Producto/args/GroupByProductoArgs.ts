import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { ProductoOrderByWithAggregationInput } from "../../../inputs/ProductoOrderByWithAggregationInput";
import { ProductoScalarWhereWithAggregatesInput } from "../../../inputs/ProductoScalarWhereWithAggregatesInput";
import { ProductoWhereInput } from "../../../inputs/ProductoWhereInput";
import { ProductoScalarFieldEnum } from "../../../../enums/ProductoScalarFieldEnum";

@TypeGraphQL.ArgsType()
export class GroupByProductoArgs {
  @TypeGraphQL.Field(_type => ProductoWhereInput, {
    nullable: true
  })
  where?: ProductoWhereInput | undefined;

  @TypeGraphQL.Field(_type => [ProductoOrderByWithAggregationInput], {
    nullable: true
  })
  orderBy?: ProductoOrderByWithAggregationInput[] | undefined;

  @TypeGraphQL.Field(_type => [ProductoScalarFieldEnum], {
    nullable: false
  })
  by!: Array<"id" | "modelo" | "foto" | "cuenta" | "retirado" | "cantidad" | "marcaId" | "origenId" | "categoriaId" | "subcategoriaId" | "precioVentaId" | "precioAlmacenId">;

  @TypeGraphQL.Field(_type => ProductoScalarWhereWithAggregatesInput, {
    nullable: true
  })
  having?: ProductoScalarWhereWithAggregatesInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;
}

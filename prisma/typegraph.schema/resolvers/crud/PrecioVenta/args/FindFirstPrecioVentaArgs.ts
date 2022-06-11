import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { PrecioVentaOrderByWithRelationInput } from "../../../inputs/PrecioVentaOrderByWithRelationInput";
import { PrecioVentaWhereInput } from "../../../inputs/PrecioVentaWhereInput";
import { PrecioVentaWhereUniqueInput } from "../../../inputs/PrecioVentaWhereUniqueInput";
import { PrecioVentaScalarFieldEnum } from "../../../../enums/PrecioVentaScalarFieldEnum";

@TypeGraphQL.ArgsType()
export class FindFirstPrecioVentaArgs {
  @TypeGraphQL.Field(_type => PrecioVentaWhereInput, {
    nullable: true
  })
  where?: PrecioVentaWhereInput | undefined;

  @TypeGraphQL.Field(_type => [PrecioVentaOrderByWithRelationInput], {
    nullable: true
  })
  orderBy?: PrecioVentaOrderByWithRelationInput[] | undefined;

  @TypeGraphQL.Field(_type => PrecioVentaWhereUniqueInput, {
    nullable: true
  })
  cursor?: PrecioVentaWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;

  @TypeGraphQL.Field(_type => [PrecioVentaScalarFieldEnum], {
    nullable: true
  })
  distinct?: Array<"id" | "a" | "aa" | "aaa" | "detal" | "instalacion"> | undefined;
}

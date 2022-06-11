import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { PrecioVentaOrderByWithRelationInput } from "../../../inputs/PrecioVentaOrderByWithRelationInput";
import { PrecioVentaWhereInput } from "../../../inputs/PrecioVentaWhereInput";
import { PrecioVentaWhereUniqueInput } from "../../../inputs/PrecioVentaWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class AggregatePrecioVentaArgs {
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
}

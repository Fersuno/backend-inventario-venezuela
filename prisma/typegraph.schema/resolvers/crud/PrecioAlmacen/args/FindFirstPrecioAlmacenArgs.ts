import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { PrecioAlmacenOrderByWithRelationInput } from "../../../inputs/PrecioAlmacenOrderByWithRelationInput";
import { PrecioAlmacenWhereInput } from "../../../inputs/PrecioAlmacenWhereInput";
import { PrecioAlmacenWhereUniqueInput } from "../../../inputs/PrecioAlmacenWhereUniqueInput";
import { PrecioAlmacenScalarFieldEnum } from "../../../../enums/PrecioAlmacenScalarFieldEnum";

@TypeGraphQL.ArgsType()
export class FindFirstPrecioAlmacenArgs {
  @TypeGraphQL.Field(_type => PrecioAlmacenWhereInput, {
    nullable: true
  })
  where?: PrecioAlmacenWhereInput | undefined;

  @TypeGraphQL.Field(_type => [PrecioAlmacenOrderByWithRelationInput], {
    nullable: true
  })
  orderBy?: PrecioAlmacenOrderByWithRelationInput[] | undefined;

  @TypeGraphQL.Field(_type => PrecioAlmacenWhereUniqueInput, {
    nullable: true
  })
  cursor?: PrecioAlmacenWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;

  @TypeGraphQL.Field(_type => [PrecioAlmacenScalarFieldEnum], {
    nullable: true
  })
  distinct?: Array<"id" | "rmb" | "cif" | "mnj"> | undefined;
}

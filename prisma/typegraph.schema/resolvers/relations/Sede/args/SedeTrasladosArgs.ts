import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { TrasladoOrderByWithRelationInput } from "../../../inputs/TrasladoOrderByWithRelationInput";
import { TrasladoWhereInput } from "../../../inputs/TrasladoWhereInput";
import { TrasladoWhereUniqueInput } from "../../../inputs/TrasladoWhereUniqueInput";
import { TrasladoScalarFieldEnum } from "../../../../enums/TrasladoScalarFieldEnum";

@TypeGraphQL.ArgsType()
export class SedeTrasladosArgs {
  @TypeGraphQL.Field(_type => TrasladoWhereInput, {
    nullable: true
  })
  where?: TrasladoWhereInput | undefined;

  @TypeGraphQL.Field(_type => [TrasladoOrderByWithRelationInput], {
    nullable: true
  })
  orderBy?: TrasladoOrderByWithRelationInput[] | undefined;

  @TypeGraphQL.Field(_type => TrasladoWhereUniqueInput, {
    nullable: true
  })
  cursor?: TrasladoWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;

  @TypeGraphQL.Field(_type => [TrasladoScalarFieldEnum], {
    nullable: true
  })
  distinct?: Array<"id" | "confirmacion" | "fechaEnvio" | "fechaConfirmacion" | "sedeId" | "sedeOrigenId" | "sedeDestinoId"> | undefined;
}

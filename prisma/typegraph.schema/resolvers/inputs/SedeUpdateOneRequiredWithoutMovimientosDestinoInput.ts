import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { SedeCreateOrConnectWithoutMovimientosDestinoInput } from "../inputs/SedeCreateOrConnectWithoutMovimientosDestinoInput";
import { SedeCreateWithoutMovimientosDestinoInput } from "../inputs/SedeCreateWithoutMovimientosDestinoInput";
import { SedeUpdateWithoutMovimientosDestinoInput } from "../inputs/SedeUpdateWithoutMovimientosDestinoInput";
import { SedeUpsertWithoutMovimientosDestinoInput } from "../inputs/SedeUpsertWithoutMovimientosDestinoInput";
import { SedeWhereUniqueInput } from "../inputs/SedeWhereUniqueInput";

@TypeGraphQL.InputType("SedeUpdateOneRequiredWithoutMovimientosDestinoInput", {
  isAbstract: true
})
export class SedeUpdateOneRequiredWithoutMovimientosDestinoInput {
  @TypeGraphQL.Field(_type => SedeCreateWithoutMovimientosDestinoInput, {
    nullable: true
  })
  create?: SedeCreateWithoutMovimientosDestinoInput | undefined;

  @TypeGraphQL.Field(_type => SedeCreateOrConnectWithoutMovimientosDestinoInput, {
    nullable: true
  })
  connectOrCreate?: SedeCreateOrConnectWithoutMovimientosDestinoInput | undefined;

  @TypeGraphQL.Field(_type => SedeUpsertWithoutMovimientosDestinoInput, {
    nullable: true
  })
  upsert?: SedeUpsertWithoutMovimientosDestinoInput | undefined;

  @TypeGraphQL.Field(_type => SedeWhereUniqueInput, {
    nullable: true
  })
  connect?: SedeWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => SedeUpdateWithoutMovimientosDestinoInput, {
    nullable: true
  })
  update?: SedeUpdateWithoutMovimientosDestinoInput | undefined;
}

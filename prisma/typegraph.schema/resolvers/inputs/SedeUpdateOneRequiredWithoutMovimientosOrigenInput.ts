import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { SedeCreateOrConnectWithoutMovimientosOrigenInput } from "../inputs/SedeCreateOrConnectWithoutMovimientosOrigenInput";
import { SedeCreateWithoutMovimientosOrigenInput } from "../inputs/SedeCreateWithoutMovimientosOrigenInput";
import { SedeUpdateWithoutMovimientosOrigenInput } from "../inputs/SedeUpdateWithoutMovimientosOrigenInput";
import { SedeUpsertWithoutMovimientosOrigenInput } from "../inputs/SedeUpsertWithoutMovimientosOrigenInput";
import { SedeWhereUniqueInput } from "../inputs/SedeWhereUniqueInput";

@TypeGraphQL.InputType("SedeUpdateOneRequiredWithoutMovimientosOrigenInput", {
  isAbstract: true
})
export class SedeUpdateOneRequiredWithoutMovimientosOrigenInput {
  @TypeGraphQL.Field(_type => SedeCreateWithoutMovimientosOrigenInput, {
    nullable: true
  })
  create?: SedeCreateWithoutMovimientosOrigenInput | undefined;

  @TypeGraphQL.Field(_type => SedeCreateOrConnectWithoutMovimientosOrigenInput, {
    nullable: true
  })
  connectOrCreate?: SedeCreateOrConnectWithoutMovimientosOrigenInput | undefined;

  @TypeGraphQL.Field(_type => SedeUpsertWithoutMovimientosOrigenInput, {
    nullable: true
  })
  upsert?: SedeUpsertWithoutMovimientosOrigenInput | undefined;

  @TypeGraphQL.Field(_type => SedeWhereUniqueInput, {
    nullable: true
  })
  connect?: SedeWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => SedeUpdateWithoutMovimientosOrigenInput, {
    nullable: true
  })
  update?: SedeUpdateWithoutMovimientosOrigenInput | undefined;
}

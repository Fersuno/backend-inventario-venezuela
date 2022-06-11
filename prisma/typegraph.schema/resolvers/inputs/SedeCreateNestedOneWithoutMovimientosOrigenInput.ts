import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { SedeCreateOrConnectWithoutMovimientosOrigenInput } from "../inputs/SedeCreateOrConnectWithoutMovimientosOrigenInput";
import { SedeCreateWithoutMovimientosOrigenInput } from "../inputs/SedeCreateWithoutMovimientosOrigenInput";
import { SedeWhereUniqueInput } from "../inputs/SedeWhereUniqueInput";

@TypeGraphQL.InputType("SedeCreateNestedOneWithoutMovimientosOrigenInput", {
  isAbstract: true
})
export class SedeCreateNestedOneWithoutMovimientosOrigenInput {
  @TypeGraphQL.Field(_type => SedeCreateWithoutMovimientosOrigenInput, {
    nullable: true
  })
  create?: SedeCreateWithoutMovimientosOrigenInput | undefined;

  @TypeGraphQL.Field(_type => SedeCreateOrConnectWithoutMovimientosOrigenInput, {
    nullable: true
  })
  connectOrCreate?: SedeCreateOrConnectWithoutMovimientosOrigenInput | undefined;

  @TypeGraphQL.Field(_type => SedeWhereUniqueInput, {
    nullable: true
  })
  connect?: SedeWhereUniqueInput | undefined;
}

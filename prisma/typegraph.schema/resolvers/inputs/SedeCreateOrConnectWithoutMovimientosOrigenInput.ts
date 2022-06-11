import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { SedeCreateWithoutMovimientosOrigenInput } from "../inputs/SedeCreateWithoutMovimientosOrigenInput";
import { SedeWhereUniqueInput } from "../inputs/SedeWhereUniqueInput";

@TypeGraphQL.InputType("SedeCreateOrConnectWithoutMovimientosOrigenInput", {
  isAbstract: true
})
export class SedeCreateOrConnectWithoutMovimientosOrigenInput {
  @TypeGraphQL.Field(_type => SedeWhereUniqueInput, {
    nullable: false
  })
  where!: SedeWhereUniqueInput;

  @TypeGraphQL.Field(_type => SedeCreateWithoutMovimientosOrigenInput, {
    nullable: false
  })
  create!: SedeCreateWithoutMovimientosOrigenInput;
}

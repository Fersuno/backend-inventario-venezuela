import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { TrasladoCreateWithoutSedeOrigenInput } from "../inputs/TrasladoCreateWithoutSedeOrigenInput";
import { TrasladoWhereUniqueInput } from "../inputs/TrasladoWhereUniqueInput";

@TypeGraphQL.InputType("TrasladoCreateOrConnectWithoutSedeOrigenInput", {
  isAbstract: true
})
export class TrasladoCreateOrConnectWithoutSedeOrigenInput {
  @TypeGraphQL.Field(_type => TrasladoWhereUniqueInput, {
    nullable: false
  })
  where!: TrasladoWhereUniqueInput;

  @TypeGraphQL.Field(_type => TrasladoCreateWithoutSedeOrigenInput, {
    nullable: false
  })
  create!: TrasladoCreateWithoutSedeOrigenInput;
}

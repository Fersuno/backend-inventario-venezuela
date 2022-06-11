import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { TrasladoCreateWithoutSedeInput } from "../inputs/TrasladoCreateWithoutSedeInput";
import { TrasladoWhereUniqueInput } from "../inputs/TrasladoWhereUniqueInput";

@TypeGraphQL.InputType("TrasladoCreateOrConnectWithoutSedeInput", {
  isAbstract: true
})
export class TrasladoCreateOrConnectWithoutSedeInput {
  @TypeGraphQL.Field(_type => TrasladoWhereUniqueInput, {
    nullable: false
  })
  where!: TrasladoWhereUniqueInput;

  @TypeGraphQL.Field(_type => TrasladoCreateWithoutSedeInput, {
    nullable: false
  })
  create!: TrasladoCreateWithoutSedeInput;
}

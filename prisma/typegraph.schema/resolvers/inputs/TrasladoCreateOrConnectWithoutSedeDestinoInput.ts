import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { TrasladoCreateWithoutSedeDestinoInput } from "../inputs/TrasladoCreateWithoutSedeDestinoInput";
import { TrasladoWhereUniqueInput } from "../inputs/TrasladoWhereUniqueInput";

@TypeGraphQL.InputType("TrasladoCreateOrConnectWithoutSedeDestinoInput", {
  isAbstract: true
})
export class TrasladoCreateOrConnectWithoutSedeDestinoInput {
  @TypeGraphQL.Field(_type => TrasladoWhereUniqueInput, {
    nullable: false
  })
  where!: TrasladoWhereUniqueInput;

  @TypeGraphQL.Field(_type => TrasladoCreateWithoutSedeDestinoInput, {
    nullable: false
  })
  create!: TrasladoCreateWithoutSedeDestinoInput;
}

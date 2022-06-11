import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { CantidadCreateWithoutSedeInput } from "../inputs/CantidadCreateWithoutSedeInput";
import { CantidadWhereUniqueInput } from "../inputs/CantidadWhereUniqueInput";

@TypeGraphQL.InputType("CantidadCreateOrConnectWithoutSedeInput", {
  isAbstract: true
})
export class CantidadCreateOrConnectWithoutSedeInput {
  @TypeGraphQL.Field(_type => CantidadWhereUniqueInput, {
    nullable: false
  })
  where!: CantidadWhereUniqueInput;

  @TypeGraphQL.Field(_type => CantidadCreateWithoutSedeInput, {
    nullable: false
  })
  create!: CantidadCreateWithoutSedeInput;
}

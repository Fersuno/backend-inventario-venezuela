import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { CantidadCreateManySedeInputEnvelope } from "../inputs/CantidadCreateManySedeInputEnvelope";
import { CantidadCreateOrConnectWithoutSedeInput } from "../inputs/CantidadCreateOrConnectWithoutSedeInput";
import { CantidadCreateWithoutSedeInput } from "../inputs/CantidadCreateWithoutSedeInput";
import { CantidadWhereUniqueInput } from "../inputs/CantidadWhereUniqueInput";

@TypeGraphQL.InputType("CantidadCreateNestedManyWithoutSedeInput", {
  isAbstract: true
})
export class CantidadCreateNestedManyWithoutSedeInput {
  @TypeGraphQL.Field(_type => [CantidadCreateWithoutSedeInput], {
    nullable: true
  })
  create?: CantidadCreateWithoutSedeInput[] | undefined;

  @TypeGraphQL.Field(_type => [CantidadCreateOrConnectWithoutSedeInput], {
    nullable: true
  })
  connectOrCreate?: CantidadCreateOrConnectWithoutSedeInput[] | undefined;

  @TypeGraphQL.Field(_type => CantidadCreateManySedeInputEnvelope, {
    nullable: true
  })
  createMany?: CantidadCreateManySedeInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [CantidadWhereUniqueInput], {
    nullable: true
  })
  connect?: CantidadWhereUniqueInput[] | undefined;
}

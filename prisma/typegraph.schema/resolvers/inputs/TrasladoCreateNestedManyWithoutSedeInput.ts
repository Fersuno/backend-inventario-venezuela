import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { TrasladoCreateManySedeInputEnvelope } from "../inputs/TrasladoCreateManySedeInputEnvelope";
import { TrasladoCreateOrConnectWithoutSedeInput } from "../inputs/TrasladoCreateOrConnectWithoutSedeInput";
import { TrasladoCreateWithoutSedeInput } from "../inputs/TrasladoCreateWithoutSedeInput";
import { TrasladoWhereUniqueInput } from "../inputs/TrasladoWhereUniqueInput";

@TypeGraphQL.InputType("TrasladoCreateNestedManyWithoutSedeInput", {
  isAbstract: true
})
export class TrasladoCreateNestedManyWithoutSedeInput {
  @TypeGraphQL.Field(_type => [TrasladoCreateWithoutSedeInput], {
    nullable: true
  })
  create?: TrasladoCreateWithoutSedeInput[] | undefined;

  @TypeGraphQL.Field(_type => [TrasladoCreateOrConnectWithoutSedeInput], {
    nullable: true
  })
  connectOrCreate?: TrasladoCreateOrConnectWithoutSedeInput[] | undefined;

  @TypeGraphQL.Field(_type => TrasladoCreateManySedeInputEnvelope, {
    nullable: true
  })
  createMany?: TrasladoCreateManySedeInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [TrasladoWhereUniqueInput], {
    nullable: true
  })
  connect?: TrasladoWhereUniqueInput[] | undefined;
}

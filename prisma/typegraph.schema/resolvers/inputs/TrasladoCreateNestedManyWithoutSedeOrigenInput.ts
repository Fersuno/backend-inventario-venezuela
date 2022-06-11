import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { TrasladoCreateManySedeOrigenInputEnvelope } from "../inputs/TrasladoCreateManySedeOrigenInputEnvelope";
import { TrasladoCreateOrConnectWithoutSedeOrigenInput } from "../inputs/TrasladoCreateOrConnectWithoutSedeOrigenInput";
import { TrasladoCreateWithoutSedeOrigenInput } from "../inputs/TrasladoCreateWithoutSedeOrigenInput";
import { TrasladoWhereUniqueInput } from "../inputs/TrasladoWhereUniqueInput";

@TypeGraphQL.InputType("TrasladoCreateNestedManyWithoutSedeOrigenInput", {
  isAbstract: true
})
export class TrasladoCreateNestedManyWithoutSedeOrigenInput {
  @TypeGraphQL.Field(_type => [TrasladoCreateWithoutSedeOrigenInput], {
    nullable: true
  })
  create?: TrasladoCreateWithoutSedeOrigenInput[] | undefined;

  @TypeGraphQL.Field(_type => [TrasladoCreateOrConnectWithoutSedeOrigenInput], {
    nullable: true
  })
  connectOrCreate?: TrasladoCreateOrConnectWithoutSedeOrigenInput[] | undefined;

  @TypeGraphQL.Field(_type => TrasladoCreateManySedeOrigenInputEnvelope, {
    nullable: true
  })
  createMany?: TrasladoCreateManySedeOrigenInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [TrasladoWhereUniqueInput], {
    nullable: true
  })
  connect?: TrasladoWhereUniqueInput[] | undefined;
}

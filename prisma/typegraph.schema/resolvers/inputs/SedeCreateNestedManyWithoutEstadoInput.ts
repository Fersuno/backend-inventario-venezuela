import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { SedeCreateManyEstadoInputEnvelope } from "../inputs/SedeCreateManyEstadoInputEnvelope";
import { SedeCreateOrConnectWithoutEstadoInput } from "../inputs/SedeCreateOrConnectWithoutEstadoInput";
import { SedeCreateWithoutEstadoInput } from "../inputs/SedeCreateWithoutEstadoInput";
import { SedeWhereUniqueInput } from "../inputs/SedeWhereUniqueInput";

@TypeGraphQL.InputType("SedeCreateNestedManyWithoutEstadoInput", {
  isAbstract: true
})
export class SedeCreateNestedManyWithoutEstadoInput {
  @TypeGraphQL.Field(_type => [SedeCreateWithoutEstadoInput], {
    nullable: true
  })
  create?: SedeCreateWithoutEstadoInput[] | undefined;

  @TypeGraphQL.Field(_type => [SedeCreateOrConnectWithoutEstadoInput], {
    nullable: true
  })
  connectOrCreate?: SedeCreateOrConnectWithoutEstadoInput[] | undefined;

  @TypeGraphQL.Field(_type => SedeCreateManyEstadoInputEnvelope, {
    nullable: true
  })
  createMany?: SedeCreateManyEstadoInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [SedeWhereUniqueInput], {
    nullable: true
  })
  connect?: SedeWhereUniqueInput[] | undefined;
}

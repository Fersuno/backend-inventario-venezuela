import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { SedeCreateOrConnectWithoutCantidadInput } from "../inputs/SedeCreateOrConnectWithoutCantidadInput";
import { SedeCreateWithoutCantidadInput } from "../inputs/SedeCreateWithoutCantidadInput";
import { SedeUpdateWithoutCantidadInput } from "../inputs/SedeUpdateWithoutCantidadInput";
import { SedeUpsertWithoutCantidadInput } from "../inputs/SedeUpsertWithoutCantidadInput";
import { SedeWhereUniqueInput } from "../inputs/SedeWhereUniqueInput";

@TypeGraphQL.InputType("SedeUpdateOneRequiredWithoutCantidadInput", {
  isAbstract: true
})
export class SedeUpdateOneRequiredWithoutCantidadInput {
  @TypeGraphQL.Field(_type => SedeCreateWithoutCantidadInput, {
    nullable: true
  })
  create?: SedeCreateWithoutCantidadInput | undefined;

  @TypeGraphQL.Field(_type => SedeCreateOrConnectWithoutCantidadInput, {
    nullable: true
  })
  connectOrCreate?: SedeCreateOrConnectWithoutCantidadInput | undefined;

  @TypeGraphQL.Field(_type => SedeUpsertWithoutCantidadInput, {
    nullable: true
  })
  upsert?: SedeUpsertWithoutCantidadInput | undefined;

  @TypeGraphQL.Field(_type => SedeWhereUniqueInput, {
    nullable: true
  })
  connect?: SedeWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => SedeUpdateWithoutCantidadInput, {
    nullable: true
  })
  update?: SedeUpdateWithoutCantidadInput | undefined;
}

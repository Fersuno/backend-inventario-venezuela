import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { SedeCreateOrConnectWithoutTrasladosInput } from "../inputs/SedeCreateOrConnectWithoutTrasladosInput";
import { SedeCreateWithoutTrasladosInput } from "../inputs/SedeCreateWithoutTrasladosInput";
import { SedeUpdateWithoutTrasladosInput } from "../inputs/SedeUpdateWithoutTrasladosInput";
import { SedeUpsertWithoutTrasladosInput } from "../inputs/SedeUpsertWithoutTrasladosInput";
import { SedeWhereUniqueInput } from "../inputs/SedeWhereUniqueInput";

@TypeGraphQL.InputType("SedeUpdateOneRequiredWithoutTrasladosInput", {
  isAbstract: true
})
export class SedeUpdateOneRequiredWithoutTrasladosInput {
  @TypeGraphQL.Field(_type => SedeCreateWithoutTrasladosInput, {
    nullable: true
  })
  create?: SedeCreateWithoutTrasladosInput | undefined;

  @TypeGraphQL.Field(_type => SedeCreateOrConnectWithoutTrasladosInput, {
    nullable: true
  })
  connectOrCreate?: SedeCreateOrConnectWithoutTrasladosInput | undefined;

  @TypeGraphQL.Field(_type => SedeUpsertWithoutTrasladosInput, {
    nullable: true
  })
  upsert?: SedeUpsertWithoutTrasladosInput | undefined;

  @TypeGraphQL.Field(_type => SedeWhereUniqueInput, {
    nullable: true
  })
  connect?: SedeWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => SedeUpdateWithoutTrasladosInput, {
    nullable: true
  })
  update?: SedeUpdateWithoutTrasladosInput | undefined;
}

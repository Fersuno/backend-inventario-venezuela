import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { SedeCreateWithoutEstadoInput } from "../inputs/SedeCreateWithoutEstadoInput";
import { SedeUpdateWithoutEstadoInput } from "../inputs/SedeUpdateWithoutEstadoInput";
import { SedeWhereUniqueInput } from "../inputs/SedeWhereUniqueInput";

@TypeGraphQL.InputType("SedeUpsertWithWhereUniqueWithoutEstadoInput", {
  isAbstract: true
})
export class SedeUpsertWithWhereUniqueWithoutEstadoInput {
  @TypeGraphQL.Field(_type => SedeWhereUniqueInput, {
    nullable: false
  })
  where!: SedeWhereUniqueInput;

  @TypeGraphQL.Field(_type => SedeUpdateWithoutEstadoInput, {
    nullable: false
  })
  update!: SedeUpdateWithoutEstadoInput;

  @TypeGraphQL.Field(_type => SedeCreateWithoutEstadoInput, {
    nullable: false
  })
  create!: SedeCreateWithoutEstadoInput;
}

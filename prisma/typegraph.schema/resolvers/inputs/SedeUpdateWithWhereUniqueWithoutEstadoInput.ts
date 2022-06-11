import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { SedeUpdateWithoutEstadoInput } from "../inputs/SedeUpdateWithoutEstadoInput";
import { SedeWhereUniqueInput } from "../inputs/SedeWhereUniqueInput";

@TypeGraphQL.InputType("SedeUpdateWithWhereUniqueWithoutEstadoInput", {
  isAbstract: true
})
export class SedeUpdateWithWhereUniqueWithoutEstadoInput {
  @TypeGraphQL.Field(_type => SedeWhereUniqueInput, {
    nullable: false
  })
  where!: SedeWhereUniqueInput;

  @TypeGraphQL.Field(_type => SedeUpdateWithoutEstadoInput, {
    nullable: false
  })
  data!: SedeUpdateWithoutEstadoInput;
}

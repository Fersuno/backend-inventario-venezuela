import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { SedeScalarWhereInput } from "../inputs/SedeScalarWhereInput";
import { SedeUpdateManyMutationInput } from "../inputs/SedeUpdateManyMutationInput";

@TypeGraphQL.InputType("SedeUpdateManyWithWhereWithoutEstadoInput", {
  isAbstract: true
})
export class SedeUpdateManyWithWhereWithoutEstadoInput {
  @TypeGraphQL.Field(_type => SedeScalarWhereInput, {
    nullable: false
  })
  where!: SedeScalarWhereInput;

  @TypeGraphQL.Field(_type => SedeUpdateManyMutationInput, {
    nullable: false
  })
  data!: SedeUpdateManyMutationInput;
}

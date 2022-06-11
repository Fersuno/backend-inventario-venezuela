import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { TrasladoScalarWhereInput } from "../inputs/TrasladoScalarWhereInput";
import { TrasladoUpdateManyMutationInput } from "../inputs/TrasladoUpdateManyMutationInput";

@TypeGraphQL.InputType("TrasladoUpdateManyWithWhereWithoutSedeInput", {
  isAbstract: true
})
export class TrasladoUpdateManyWithWhereWithoutSedeInput {
  @TypeGraphQL.Field(_type => TrasladoScalarWhereInput, {
    nullable: false
  })
  where!: TrasladoScalarWhereInput;

  @TypeGraphQL.Field(_type => TrasladoUpdateManyMutationInput, {
    nullable: false
  })
  data!: TrasladoUpdateManyMutationInput;
}

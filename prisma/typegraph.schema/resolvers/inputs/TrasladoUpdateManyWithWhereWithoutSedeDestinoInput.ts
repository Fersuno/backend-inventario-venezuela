import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { TrasladoScalarWhereInput } from "../inputs/TrasladoScalarWhereInput";
import { TrasladoUpdateManyMutationInput } from "../inputs/TrasladoUpdateManyMutationInput";

@TypeGraphQL.InputType("TrasladoUpdateManyWithWhereWithoutSedeDestinoInput", {
  isAbstract: true
})
export class TrasladoUpdateManyWithWhereWithoutSedeDestinoInput {
  @TypeGraphQL.Field(_type => TrasladoScalarWhereInput, {
    nullable: false
  })
  where!: TrasladoScalarWhereInput;

  @TypeGraphQL.Field(_type => TrasladoUpdateManyMutationInput, {
    nullable: false
  })
  data!: TrasladoUpdateManyMutationInput;
}

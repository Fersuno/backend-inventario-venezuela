import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { TrasladoCreateManySedeInput } from "../inputs/TrasladoCreateManySedeInput";

@TypeGraphQL.InputType("TrasladoCreateManySedeInputEnvelope", {
  isAbstract: true
})
export class TrasladoCreateManySedeInputEnvelope {
  @TypeGraphQL.Field(_type => [TrasladoCreateManySedeInput], {
    nullable: false
  })
  data!: TrasladoCreateManySedeInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}

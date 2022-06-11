import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { TrasladoCreateManySedeDestinoInput } from "../inputs/TrasladoCreateManySedeDestinoInput";

@TypeGraphQL.InputType("TrasladoCreateManySedeDestinoInputEnvelope", {
  isAbstract: true
})
export class TrasladoCreateManySedeDestinoInputEnvelope {
  @TypeGraphQL.Field(_type => [TrasladoCreateManySedeDestinoInput], {
    nullable: false
  })
  data!: TrasladoCreateManySedeDestinoInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}

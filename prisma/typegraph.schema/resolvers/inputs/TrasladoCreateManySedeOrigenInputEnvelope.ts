import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { TrasladoCreateManySedeOrigenInput } from "../inputs/TrasladoCreateManySedeOrigenInput";

@TypeGraphQL.InputType("TrasladoCreateManySedeOrigenInputEnvelope", {
  isAbstract: true
})
export class TrasladoCreateManySedeOrigenInputEnvelope {
  @TypeGraphQL.Field(_type => [TrasladoCreateManySedeOrigenInput], {
    nullable: false
  })
  data!: TrasladoCreateManySedeOrigenInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}

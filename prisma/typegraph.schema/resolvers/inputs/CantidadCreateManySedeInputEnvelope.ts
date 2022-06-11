import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { CantidadCreateManySedeInput } from "../inputs/CantidadCreateManySedeInput";

@TypeGraphQL.InputType("CantidadCreateManySedeInputEnvelope", {
  isAbstract: true
})
export class CantidadCreateManySedeInputEnvelope {
  @TypeGraphQL.Field(_type => [CantidadCreateManySedeInput], {
    nullable: false
  })
  data!: CantidadCreateManySedeInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}

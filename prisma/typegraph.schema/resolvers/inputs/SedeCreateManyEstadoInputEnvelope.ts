import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { SedeCreateManyEstadoInput } from "../inputs/SedeCreateManyEstadoInput";

@TypeGraphQL.InputType("SedeCreateManyEstadoInputEnvelope", {
  isAbstract: true
})
export class SedeCreateManyEstadoInputEnvelope {
  @TypeGraphQL.Field(_type => [SedeCreateManyEstadoInput], {
    nullable: false
  })
  data!: SedeCreateManyEstadoInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}

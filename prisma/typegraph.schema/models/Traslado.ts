import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../scalars";
import { Sede } from "../models/Sede";

@TypeGraphQL.ObjectType("Traslado", {
  isAbstract: true
})
export class Traslado {
  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  id!: number;

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: false
  })
  confirmacion!: boolean;

  @TypeGraphQL.Field(_type => Date, {
    nullable: false
  })
  fechaEnvio!: Date;

  @TypeGraphQL.Field(_type => Date, {
    nullable: false
  })
  fechaConfirmacion!: Date;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  sedeId!: number;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  sedeOrigenId!: number;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  sedeDestinoId!: number;

  sede?: Sede;

  sedeOrigen?: Sede;

  sedeDestino?: Sede;
}

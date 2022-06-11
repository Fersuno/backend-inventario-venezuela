import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";

@TypeGraphQL.ObjectType("TrasladoMinAggregate", {
  isAbstract: true
})
export class TrasladoMinAggregate {
  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  id!: number | null;

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  confirmacion!: boolean | null;

  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  fechaEnvio!: Date | null;

  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  fechaConfirmacion!: Date | null;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  sedeId!: number | null;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  sedeOrigenId!: number | null;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  sedeDestinoId!: number | null;
}

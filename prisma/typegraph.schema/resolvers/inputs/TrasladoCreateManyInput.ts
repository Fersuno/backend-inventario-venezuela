import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";

@TypeGraphQL.InputType("TrasladoCreateManyInput", {
  isAbstract: true
})
export class TrasladoCreateManyInput {
  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  id?: number | undefined;

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  confirmacion?: boolean | undefined;

  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  fechaEnvio?: Date | undefined;

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
}

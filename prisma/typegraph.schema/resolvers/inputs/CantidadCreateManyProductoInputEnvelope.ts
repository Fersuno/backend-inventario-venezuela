import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { CantidadCreateManyProductoInput } from "../inputs/CantidadCreateManyProductoInput";

@TypeGraphQL.InputType("CantidadCreateManyProductoInputEnvelope", {
  isAbstract: true
})
export class CantidadCreateManyProductoInputEnvelope {
  @TypeGraphQL.Field(_type => [CantidadCreateManyProductoInput], {
    nullable: false
  })
  data!: CantidadCreateManyProductoInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}

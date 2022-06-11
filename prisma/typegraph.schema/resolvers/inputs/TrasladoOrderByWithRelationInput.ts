import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { SedeOrderByWithRelationInput } from "../inputs/SedeOrderByWithRelationInput";
import { SortOrder } from "../../enums/SortOrder";

@TypeGraphQL.InputType("TrasladoOrderByWithRelationInput", {
  isAbstract: true
})
export class TrasladoOrderByWithRelationInput {
  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  id?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  confirmacion?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  fechaEnvio?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  fechaConfirmacion?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  sedeId?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  sedeOrigenId?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  sedeDestinoId?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SedeOrderByWithRelationInput, {
    nullable: true
  })
  sede?: SedeOrderByWithRelationInput | undefined;

  @TypeGraphQL.Field(_type => SedeOrderByWithRelationInput, {
    nullable: true
  })
  sedeOrigen?: SedeOrderByWithRelationInput | undefined;

  @TypeGraphQL.Field(_type => SedeOrderByWithRelationInput, {
    nullable: true
  })
  sedeDestino?: SedeOrderByWithRelationInput | undefined;
}

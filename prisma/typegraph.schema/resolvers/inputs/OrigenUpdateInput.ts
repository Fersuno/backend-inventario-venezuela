import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { IntFieldUpdateOperationsInput } from "../inputs/IntFieldUpdateOperationsInput";
import { ProductoUpdateManyWithoutOrigenInput } from "../inputs/ProductoUpdateManyWithoutOrigenInput";
import { StringFieldUpdateOperationsInput } from "../inputs/StringFieldUpdateOperationsInput";

@TypeGraphQL.InputType("OrigenUpdateInput", {
  isAbstract: true
})
export class OrigenUpdateInput {
  @TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput, {
    nullable: true
  })
  nombre?: StringFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => IntFieldUpdateOperationsInput, {
    nullable: true
  })
  porcentaje?: IntFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => ProductoUpdateManyWithoutOrigenInput, {
    nullable: true
  })
  producto?: ProductoUpdateManyWithoutOrigenInput | undefined;
}

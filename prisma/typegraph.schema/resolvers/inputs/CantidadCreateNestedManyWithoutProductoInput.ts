import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { CantidadCreateManyProductoInputEnvelope } from "../inputs/CantidadCreateManyProductoInputEnvelope";
import { CantidadCreateOrConnectWithoutProductoInput } from "../inputs/CantidadCreateOrConnectWithoutProductoInput";
import { CantidadCreateWithoutProductoInput } from "../inputs/CantidadCreateWithoutProductoInput";
import { CantidadWhereUniqueInput } from "../inputs/CantidadWhereUniqueInput";

@TypeGraphQL.InputType("CantidadCreateNestedManyWithoutProductoInput", {
  isAbstract: true
})
export class CantidadCreateNestedManyWithoutProductoInput {
  @TypeGraphQL.Field(_type => [CantidadCreateWithoutProductoInput], {
    nullable: true
  })
  create?: CantidadCreateWithoutProductoInput[] | undefined;

  @TypeGraphQL.Field(_type => [CantidadCreateOrConnectWithoutProductoInput], {
    nullable: true
  })
  connectOrCreate?: CantidadCreateOrConnectWithoutProductoInput[] | undefined;

  @TypeGraphQL.Field(_type => CantidadCreateManyProductoInputEnvelope, {
    nullable: true
  })
  createMany?: CantidadCreateManyProductoInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [CantidadWhereUniqueInput], {
    nullable: true
  })
  connect?: CantidadWhereUniqueInput[] | undefined;
}

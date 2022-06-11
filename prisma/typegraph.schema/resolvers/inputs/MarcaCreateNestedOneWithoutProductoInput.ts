import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { MarcaCreateOrConnectWithoutProductoInput } from "../inputs/MarcaCreateOrConnectWithoutProductoInput";
import { MarcaCreateWithoutProductoInput } from "../inputs/MarcaCreateWithoutProductoInput";
import { MarcaWhereUniqueInput } from "../inputs/MarcaWhereUniqueInput";

@TypeGraphQL.InputType("MarcaCreateNestedOneWithoutProductoInput", {
  isAbstract: true
})
export class MarcaCreateNestedOneWithoutProductoInput {
  @TypeGraphQL.Field(_type => MarcaCreateWithoutProductoInput, {
    nullable: true
  })
  create?: MarcaCreateWithoutProductoInput | undefined;

  @TypeGraphQL.Field(_type => MarcaCreateOrConnectWithoutProductoInput, {
    nullable: true
  })
  connectOrCreate?: MarcaCreateOrConnectWithoutProductoInput | undefined;

  @TypeGraphQL.Field(_type => MarcaWhereUniqueInput, {
    nullable: true
  })
  connect?: MarcaWhereUniqueInput | undefined;
}

import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { MarcaCreateOrConnectWithoutProductoInput } from "../inputs/MarcaCreateOrConnectWithoutProductoInput";
import { MarcaCreateWithoutProductoInput } from "../inputs/MarcaCreateWithoutProductoInput";
import { MarcaUpdateWithoutProductoInput } from "../inputs/MarcaUpdateWithoutProductoInput";
import { MarcaUpsertWithoutProductoInput } from "../inputs/MarcaUpsertWithoutProductoInput";
import { MarcaWhereUniqueInput } from "../inputs/MarcaWhereUniqueInput";

@TypeGraphQL.InputType("MarcaUpdateOneWithoutProductoInput", {
  isAbstract: true
})
export class MarcaUpdateOneWithoutProductoInput {
  @TypeGraphQL.Field(_type => MarcaCreateWithoutProductoInput, {
    nullable: true
  })
  create?: MarcaCreateWithoutProductoInput | undefined;

  @TypeGraphQL.Field(_type => MarcaCreateOrConnectWithoutProductoInput, {
    nullable: true
  })
  connectOrCreate?: MarcaCreateOrConnectWithoutProductoInput | undefined;

  @TypeGraphQL.Field(_type => MarcaUpsertWithoutProductoInput, {
    nullable: true
  })
  upsert?: MarcaUpsertWithoutProductoInput | undefined;

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  disconnect?: boolean | undefined;

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  delete?: boolean | undefined;

  @TypeGraphQL.Field(_type => MarcaWhereUniqueInput, {
    nullable: true
  })
  connect?: MarcaWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => MarcaUpdateWithoutProductoInput, {
    nullable: true
  })
  update?: MarcaUpdateWithoutProductoInput | undefined;
}

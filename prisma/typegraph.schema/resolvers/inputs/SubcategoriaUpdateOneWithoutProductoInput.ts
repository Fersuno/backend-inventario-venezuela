import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { SubcategoriaCreateOrConnectWithoutProductoInput } from "../inputs/SubcategoriaCreateOrConnectWithoutProductoInput";
import { SubcategoriaCreateWithoutProductoInput } from "../inputs/SubcategoriaCreateWithoutProductoInput";
import { SubcategoriaUpdateWithoutProductoInput } from "../inputs/SubcategoriaUpdateWithoutProductoInput";
import { SubcategoriaUpsertWithoutProductoInput } from "../inputs/SubcategoriaUpsertWithoutProductoInput";
import { SubcategoriaWhereUniqueInput } from "../inputs/SubcategoriaWhereUniqueInput";

@TypeGraphQL.InputType("SubcategoriaUpdateOneWithoutProductoInput", {
  isAbstract: true
})
export class SubcategoriaUpdateOneWithoutProductoInput {
  @TypeGraphQL.Field(_type => SubcategoriaCreateWithoutProductoInput, {
    nullable: true
  })
  create?: SubcategoriaCreateWithoutProductoInput | undefined;

  @TypeGraphQL.Field(_type => SubcategoriaCreateOrConnectWithoutProductoInput, {
    nullable: true
  })
  connectOrCreate?: SubcategoriaCreateOrConnectWithoutProductoInput | undefined;

  @TypeGraphQL.Field(_type => SubcategoriaUpsertWithoutProductoInput, {
    nullable: true
  })
  upsert?: SubcategoriaUpsertWithoutProductoInput | undefined;

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  disconnect?: boolean | undefined;

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  delete?: boolean | undefined;

  @TypeGraphQL.Field(_type => SubcategoriaWhereUniqueInput, {
    nullable: true
  })
  connect?: SubcategoriaWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => SubcategoriaUpdateWithoutProductoInput, {
    nullable: true
  })
  update?: SubcategoriaUpdateWithoutProductoInput | undefined;
}

import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { SubcategoriaCreateManyCategoriaInputEnvelope } from "../inputs/SubcategoriaCreateManyCategoriaInputEnvelope";
import { SubcategoriaCreateOrConnectWithoutCategoriaInput } from "../inputs/SubcategoriaCreateOrConnectWithoutCategoriaInput";
import { SubcategoriaCreateWithoutCategoriaInput } from "../inputs/SubcategoriaCreateWithoutCategoriaInput";
import { SubcategoriaScalarWhereInput } from "../inputs/SubcategoriaScalarWhereInput";
import { SubcategoriaUpdateManyWithWhereWithoutCategoriaInput } from "../inputs/SubcategoriaUpdateManyWithWhereWithoutCategoriaInput";
import { SubcategoriaUpdateWithWhereUniqueWithoutCategoriaInput } from "../inputs/SubcategoriaUpdateWithWhereUniqueWithoutCategoriaInput";
import { SubcategoriaUpsertWithWhereUniqueWithoutCategoriaInput } from "../inputs/SubcategoriaUpsertWithWhereUniqueWithoutCategoriaInput";
import { SubcategoriaWhereUniqueInput } from "../inputs/SubcategoriaWhereUniqueInput";

@TypeGraphQL.InputType("SubcategoriaUpdateManyWithoutCategoriaInput", {
  isAbstract: true
})
export class SubcategoriaUpdateManyWithoutCategoriaInput {
  @TypeGraphQL.Field(_type => [SubcategoriaCreateWithoutCategoriaInput], {
    nullable: true
  })
  create?: SubcategoriaCreateWithoutCategoriaInput[] | undefined;

  @TypeGraphQL.Field(_type => [SubcategoriaCreateOrConnectWithoutCategoriaInput], {
    nullable: true
  })
  connectOrCreate?: SubcategoriaCreateOrConnectWithoutCategoriaInput[] | undefined;

  @TypeGraphQL.Field(_type => [SubcategoriaUpsertWithWhereUniqueWithoutCategoriaInput], {
    nullable: true
  })
  upsert?: SubcategoriaUpsertWithWhereUniqueWithoutCategoriaInput[] | undefined;

  @TypeGraphQL.Field(_type => SubcategoriaCreateManyCategoriaInputEnvelope, {
    nullable: true
  })
  createMany?: SubcategoriaCreateManyCategoriaInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [SubcategoriaWhereUniqueInput], {
    nullable: true
  })
  set?: SubcategoriaWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [SubcategoriaWhereUniqueInput], {
    nullable: true
  })
  disconnect?: SubcategoriaWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [SubcategoriaWhereUniqueInput], {
    nullable: true
  })
  delete?: SubcategoriaWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [SubcategoriaWhereUniqueInput], {
    nullable: true
  })
  connect?: SubcategoriaWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [SubcategoriaUpdateWithWhereUniqueWithoutCategoriaInput], {
    nullable: true
  })
  update?: SubcategoriaUpdateWithWhereUniqueWithoutCategoriaInput[] | undefined;

  @TypeGraphQL.Field(_type => [SubcategoriaUpdateManyWithWhereWithoutCategoriaInput], {
    nullable: true
  })
  updateMany?: SubcategoriaUpdateManyWithWhereWithoutCategoriaInput[] | undefined;

  @TypeGraphQL.Field(_type => [SubcategoriaScalarWhereInput], {
    nullable: true
  })
  deleteMany?: SubcategoriaScalarWhereInput[] | undefined;
}

import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { SubcategoriaCreateManyCategoriaInputEnvelope } from "../inputs/SubcategoriaCreateManyCategoriaInputEnvelope";
import { SubcategoriaCreateOrConnectWithoutCategoriaInput } from "../inputs/SubcategoriaCreateOrConnectWithoutCategoriaInput";
import { SubcategoriaCreateWithoutCategoriaInput } from "../inputs/SubcategoriaCreateWithoutCategoriaInput";
import { SubcategoriaWhereUniqueInput } from "../inputs/SubcategoriaWhereUniqueInput";

@TypeGraphQL.InputType("SubcategoriaCreateNestedManyWithoutCategoriaInput", {
  isAbstract: true
})
export class SubcategoriaCreateNestedManyWithoutCategoriaInput {
  @TypeGraphQL.Field(_type => [SubcategoriaCreateWithoutCategoriaInput], {
    nullable: true
  })
  create?: SubcategoriaCreateWithoutCategoriaInput[] | undefined;

  @TypeGraphQL.Field(_type => [SubcategoriaCreateOrConnectWithoutCategoriaInput], {
    nullable: true
  })
  connectOrCreate?: SubcategoriaCreateOrConnectWithoutCategoriaInput[] | undefined;

  @TypeGraphQL.Field(_type => SubcategoriaCreateManyCategoriaInputEnvelope, {
    nullable: true
  })
  createMany?: SubcategoriaCreateManyCategoriaInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [SubcategoriaWhereUniqueInput], {
    nullable: true
  })
  connect?: SubcategoriaWhereUniqueInput[] | undefined;
}

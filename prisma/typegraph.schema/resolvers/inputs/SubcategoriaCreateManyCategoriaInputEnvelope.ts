import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { SubcategoriaCreateManyCategoriaInput } from "../inputs/SubcategoriaCreateManyCategoriaInput";

@TypeGraphQL.InputType("SubcategoriaCreateManyCategoriaInputEnvelope", {
  isAbstract: true
})
export class SubcategoriaCreateManyCategoriaInputEnvelope {
  @TypeGraphQL.Field(_type => [SubcategoriaCreateManyCategoriaInput], {
    nullable: false
  })
  data!: SubcategoriaCreateManyCategoriaInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}

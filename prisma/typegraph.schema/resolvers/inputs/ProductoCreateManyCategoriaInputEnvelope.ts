import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ProductoCreateManyCategoriaInput } from "../inputs/ProductoCreateManyCategoriaInput";

@TypeGraphQL.InputType("ProductoCreateManyCategoriaInputEnvelope", {
  isAbstract: true
})
export class ProductoCreateManyCategoriaInputEnvelope {
  @TypeGraphQL.Field(_type => [ProductoCreateManyCategoriaInput], {
    nullable: false
  })
  data!: ProductoCreateManyCategoriaInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}

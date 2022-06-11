import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ProductoCreateManySubcategoriaInput } from "../inputs/ProductoCreateManySubcategoriaInput";

@TypeGraphQL.InputType("ProductoCreateManySubcategoriaInputEnvelope", {
  isAbstract: true
})
export class ProductoCreateManySubcategoriaInputEnvelope {
  @TypeGraphQL.Field(_type => [ProductoCreateManySubcategoriaInput], {
    nullable: false
  })
  data!: ProductoCreateManySubcategoriaInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}

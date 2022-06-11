import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ProductoCreateManyMarcaInput } from "../inputs/ProductoCreateManyMarcaInput";

@TypeGraphQL.InputType("ProductoCreateManyMarcaInputEnvelope", {
  isAbstract: true
})
export class ProductoCreateManyMarcaInputEnvelope {
  @TypeGraphQL.Field(_type => [ProductoCreateManyMarcaInput], {
    nullable: false
  })
  data!: ProductoCreateManyMarcaInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}

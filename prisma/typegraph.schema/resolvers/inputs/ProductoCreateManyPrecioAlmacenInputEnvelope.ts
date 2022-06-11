import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ProductoCreateManyPrecioAlmacenInput } from "../inputs/ProductoCreateManyPrecioAlmacenInput";

@TypeGraphQL.InputType("ProductoCreateManyPrecioAlmacenInputEnvelope", {
  isAbstract: true
})
export class ProductoCreateManyPrecioAlmacenInputEnvelope {
  @TypeGraphQL.Field(_type => [ProductoCreateManyPrecioAlmacenInput], {
    nullable: false
  })
  data!: ProductoCreateManyPrecioAlmacenInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}

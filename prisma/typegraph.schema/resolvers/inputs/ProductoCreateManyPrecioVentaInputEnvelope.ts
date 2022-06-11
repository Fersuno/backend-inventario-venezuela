import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ProductoCreateManyPrecioVentaInput } from "../inputs/ProductoCreateManyPrecioVentaInput";

@TypeGraphQL.InputType("ProductoCreateManyPrecioVentaInputEnvelope", {
  isAbstract: true
})
export class ProductoCreateManyPrecioVentaInputEnvelope {
  @TypeGraphQL.Field(_type => [ProductoCreateManyPrecioVentaInput], {
    nullable: false
  })
  data!: ProductoCreateManyPrecioVentaInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}

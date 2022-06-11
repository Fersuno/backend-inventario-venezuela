import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ProductoCreateManyOrigenInput } from "../inputs/ProductoCreateManyOrigenInput";

@TypeGraphQL.InputType("ProductoCreateManyOrigenInputEnvelope", {
  isAbstract: true
})
export class ProductoCreateManyOrigenInputEnvelope {
  @TypeGraphQL.Field(_type => [ProductoCreateManyOrigenInput], {
    nullable: false
  })
  data!: ProductoCreateManyOrigenInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}

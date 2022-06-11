import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { ProductoCreateManyInput } from "../../../inputs/ProductoCreateManyInput";

@TypeGraphQL.ArgsType()
export class CreateManyProductoArgs {
  @TypeGraphQL.Field(_type => [ProductoCreateManyInput], {
    nullable: false
  })
  data!: ProductoCreateManyInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}

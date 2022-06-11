import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { ProductoCreateInput } from "../../../inputs/ProductoCreateInput";

@TypeGraphQL.ArgsType()
export class CreateProductoArgs {
  @TypeGraphQL.Field(_type => ProductoCreateInput, {
    nullable: false
  })
  data!: ProductoCreateInput;
}

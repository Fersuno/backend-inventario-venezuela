import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { ProductoUpdateInput } from "../../../inputs/ProductoUpdateInput";
import { ProductoWhereUniqueInput } from "../../../inputs/ProductoWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpdateProductoArgs {
  @TypeGraphQL.Field(_type => ProductoUpdateInput, {
    nullable: false
  })
  data!: ProductoUpdateInput;

  @TypeGraphQL.Field(_type => ProductoWhereUniqueInput, {
    nullable: false
  })
  where!: ProductoWhereUniqueInput;
}

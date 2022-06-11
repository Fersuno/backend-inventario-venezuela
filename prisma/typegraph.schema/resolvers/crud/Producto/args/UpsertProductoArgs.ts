import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { ProductoCreateInput } from "../../../inputs/ProductoCreateInput";
import { ProductoUpdateInput } from "../../../inputs/ProductoUpdateInput";
import { ProductoWhereUniqueInput } from "../../../inputs/ProductoWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpsertProductoArgs {
  @TypeGraphQL.Field(_type => ProductoWhereUniqueInput, {
    nullable: false
  })
  where!: ProductoWhereUniqueInput;

  @TypeGraphQL.Field(_type => ProductoCreateInput, {
    nullable: false
  })
  create!: ProductoCreateInput;

  @TypeGraphQL.Field(_type => ProductoUpdateInput, {
    nullable: false
  })
  update!: ProductoUpdateInput;
}

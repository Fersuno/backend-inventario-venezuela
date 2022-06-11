import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { ProductoWhereUniqueInput } from "../../../inputs/ProductoWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class DeleteProductoArgs {
  @TypeGraphQL.Field(_type => ProductoWhereUniqueInput, {
    nullable: false
  })
  where!: ProductoWhereUniqueInput;
}

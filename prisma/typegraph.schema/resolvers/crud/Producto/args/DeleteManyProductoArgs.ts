import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { ProductoWhereInput } from "../../../inputs/ProductoWhereInput";

@TypeGraphQL.ArgsType()
export class DeleteManyProductoArgs {
  @TypeGraphQL.Field(_type => ProductoWhereInput, {
    nullable: true
  })
  where?: ProductoWhereInput | undefined;
}

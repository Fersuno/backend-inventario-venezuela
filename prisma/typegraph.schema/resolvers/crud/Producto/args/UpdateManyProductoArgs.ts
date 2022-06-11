import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { ProductoUpdateManyMutationInput } from "../../../inputs/ProductoUpdateManyMutationInput";
import { ProductoWhereInput } from "../../../inputs/ProductoWhereInput";

@TypeGraphQL.ArgsType()
export class UpdateManyProductoArgs {
  @TypeGraphQL.Field(_type => ProductoUpdateManyMutationInput, {
    nullable: false
  })
  data!: ProductoUpdateManyMutationInput;

  @TypeGraphQL.Field(_type => ProductoWhereInput, {
    nullable: true
  })
  where?: ProductoWhereInput | undefined;
}

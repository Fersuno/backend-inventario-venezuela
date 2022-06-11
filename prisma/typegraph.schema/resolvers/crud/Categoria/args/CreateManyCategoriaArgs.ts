import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { CategoriaCreateManyInput } from "../../../inputs/CategoriaCreateManyInput";

@TypeGraphQL.ArgsType()
export class CreateManyCategoriaArgs {
  @TypeGraphQL.Field(_type => [CategoriaCreateManyInput], {
    nullable: false
  })
  data!: CategoriaCreateManyInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}

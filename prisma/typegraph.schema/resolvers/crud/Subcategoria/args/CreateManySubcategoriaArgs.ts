import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { SubcategoriaCreateManyInput } from "../../../inputs/SubcategoriaCreateManyInput";

@TypeGraphQL.ArgsType()
export class CreateManySubcategoriaArgs {
  @TypeGraphQL.Field(_type => [SubcategoriaCreateManyInput], {
    nullable: false
  })
  data!: SubcategoriaCreateManyInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}

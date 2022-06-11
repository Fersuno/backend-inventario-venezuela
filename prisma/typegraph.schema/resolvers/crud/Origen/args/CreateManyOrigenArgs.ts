import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { OrigenCreateManyInput } from "../../../inputs/OrigenCreateManyInput";

@TypeGraphQL.ArgsType()
export class CreateManyOrigenArgs {
  @TypeGraphQL.Field(_type => [OrigenCreateManyInput], {
    nullable: false
  })
  data!: OrigenCreateManyInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}

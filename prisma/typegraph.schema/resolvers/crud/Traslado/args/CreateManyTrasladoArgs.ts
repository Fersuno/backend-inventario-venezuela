import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { TrasladoCreateManyInput } from "../../../inputs/TrasladoCreateManyInput";

@TypeGraphQL.ArgsType()
export class CreateManyTrasladoArgs {
  @TypeGraphQL.Field(_type => [TrasladoCreateManyInput], {
    nullable: false
  })
  data!: TrasladoCreateManyInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}

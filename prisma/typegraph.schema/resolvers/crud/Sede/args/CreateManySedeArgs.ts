import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { SedeCreateManyInput } from "../../../inputs/SedeCreateManyInput";

@TypeGraphQL.ArgsType()
export class CreateManySedeArgs {
  @TypeGraphQL.Field(_type => [SedeCreateManyInput], {
    nullable: false
  })
  data!: SedeCreateManyInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}

import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { CantidadCreateManyInput } from "../../../inputs/CantidadCreateManyInput";

@TypeGraphQL.ArgsType()
export class CreateManyCantidadArgs {
  @TypeGraphQL.Field(_type => [CantidadCreateManyInput], {
    nullable: false
  })
  data!: CantidadCreateManyInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}

import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { MarcaCreateManyInput } from "../../../inputs/MarcaCreateManyInput";

@TypeGraphQL.ArgsType()
export class CreateManyMarcaArgs {
  @TypeGraphQL.Field(_type => [MarcaCreateManyInput], {
    nullable: false
  })
  data!: MarcaCreateManyInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}

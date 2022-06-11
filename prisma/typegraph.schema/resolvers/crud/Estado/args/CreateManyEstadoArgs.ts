import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { EstadoCreateManyInput } from "../../../inputs/EstadoCreateManyInput";

@TypeGraphQL.ArgsType()
export class CreateManyEstadoArgs {
  @TypeGraphQL.Field(_type => [EstadoCreateManyInput], {
    nullable: false
  })
  data!: EstadoCreateManyInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}

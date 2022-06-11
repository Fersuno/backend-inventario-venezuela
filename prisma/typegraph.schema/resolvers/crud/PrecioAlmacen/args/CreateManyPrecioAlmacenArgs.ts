import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { PrecioAlmacenCreateManyInput } from "../../../inputs/PrecioAlmacenCreateManyInput";

@TypeGraphQL.ArgsType()
export class CreateManyPrecioAlmacenArgs {
  @TypeGraphQL.Field(_type => [PrecioAlmacenCreateManyInput], {
    nullable: false
  })
  data!: PrecioAlmacenCreateManyInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}

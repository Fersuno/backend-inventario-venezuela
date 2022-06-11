import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { PrecioVentaCreateManyInput } from "../../../inputs/PrecioVentaCreateManyInput";

@TypeGraphQL.ArgsType()
export class CreateManyPrecioVentaArgs {
  @TypeGraphQL.Field(_type => [PrecioVentaCreateManyInput], {
    nullable: false
  })
  data!: PrecioVentaCreateManyInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}

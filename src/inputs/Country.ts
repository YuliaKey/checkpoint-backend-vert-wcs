import { Field, InputType } from "type-graphql";

@InputType()
export class CountryInput {
  @Field()
  name: string;

  @Field()
  code: string;

  @Field()
  emoji: string;

  @Field({ nullable: true })
  continentCode?: string;
}

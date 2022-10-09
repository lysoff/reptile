import { InputType, Int, Field } from '@nestjs/graphql';

@InputType()
export class CreateRecordInput {
  @Field()
  caption: string;

  @Field()
  url: string;

  @Field(() => Int)
  domainId: number;
}

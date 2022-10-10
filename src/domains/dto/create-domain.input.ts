import { InputType, Field, Int } from '@nestjs/graphql';

@InputType()
export class CreateDomainInput {
  @Field()
  name: string;

  @Field({ nullable: true })
  tags: string;

  @Field(() => Int)
  userId: number;
}

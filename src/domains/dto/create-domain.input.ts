import { InputType, Field } from '@nestjs/graphql';

@InputType()
export class CreateDomainInput {
  @Field()
  name: string;

  @Field({ nullable: true })
  tags: string;
}

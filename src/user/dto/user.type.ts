import { Field, Int, ObjectType } from '@nestjs/graphql';

@ObjectType('User')
export class UserType {
  @Field(() => Int, { description: 'Example field (placeholder)' })
  exampleField!: number;
}

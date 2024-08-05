
import { Field, InputType } from '@nestjs/graphql'

@InputType()
export class zipcodeInputDTO {
  @Field()
  zipcode: string
}
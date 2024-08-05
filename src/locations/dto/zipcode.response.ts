import { Field, ObjectType } from '@nestjs/graphql'

@ObjectType()
export class zipcodeResponseDTO {
  @Field()
  d_codigo: string

  @Field()
  D_mnpio: string

  @Field()
  d_estado: string

  @Field(() => [NeigbornDTO])
  d_neighborn : NeigbornDTO[]

}

@ObjectType()
export class NeigbornDTO {

    @Field()
    id_asenta_cpcons: string

    @Field()
    d_asenta: string

}

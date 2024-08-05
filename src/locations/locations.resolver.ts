import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql'
import { LocationsService } from './locations.service'
import { Location } from './entities/location.entity'
import { zipcodeResponseDTO } from './dto'

@Resolver(() => Location)
export class LocationsResolver {
  constructor(
    private readonly locationsService: LocationsService
  ) {}

  @Query(() => zipcodeResponseDTO, { name: 'locations' })
  async findByZip( 
    @Args('zipcode') zipcode:string
  ): Promise<zipcodeResponseDTO> {
    return this.locationsService.findByZip(zipcode)
  }
  
}

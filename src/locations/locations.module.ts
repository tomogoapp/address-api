import { Module } from '@nestjs/common'
import { LocationsService } from './locations.service'
import { LocationsResolver } from './locations.resolver'
import { MongooseModule } from '@nestjs/mongoose'
import { Location, LocationSchema } from './entities/location.entity'

@Module({
  providers: [LocationsResolver, LocationsService],
  imports:[
    MongooseModule.forFeature([{ name: Location.name, schema: LocationSchema }]),
    LocationsModule
  ]
})
export class LocationsModule {}

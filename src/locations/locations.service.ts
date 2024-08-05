import { BadGatewayException, Injectable } from '@nestjs/common'
import { zipcodeResponseDTO } from './dto'
import { Location } from './entities/location.entity'
import { InjectModel } from '@nestjs/mongoose'
import { Model } from 'mongoose'

@Injectable()
export class LocationsService {
  constructor(
    @InjectModel(Location.name) private locationModel: Model<Location>
  ){}


  async findByZip(zipcode) :Promise<zipcodeResponseDTO> {

    const locations = await this.locationModel.find({ d_codigo: zipcode }).populate('state')

    if (locations.length === 0) {
      throw new BadGatewayException('error al buscar codigo postal')
    }

    const commonData = {
      d_codigo: locations[0].d_codigo,
      D_mnpio: locations[0].D_mnpio,
      d_estado: locations[0].d_estado,
    }

    const d_neighborn = locations.map((elem) => ({
        d_asenta: elem.d_asenta,
        id_asenta_cpcons: elem.id_asenta_cpcons
    }))

    const result: zipcodeResponseDTO = {
      ...commonData,
      d_neighborn
    }
  
    return result
  }
}

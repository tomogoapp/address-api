import { Controller, Get, Query } from '@nestjs/common'
import { MigrationService } from './migration.service'
import { InjectModel } from '@nestjs/mongoose'
import { Model } from 'mongoose'
import { Location } from './entities'

@Controller('migration')
export class MigrationController {
  constructor(
    private readonly migrationService: MigrationService,
    @InjectModel(Location.name) private locationModel: Model<Location>
  ) {}

  @Get('migrate')
  async migrateData(@Query('filePath') filePath:string){
    await this.migrationService.migrateData(filePath)
    return {message: 'Data migration complete successfully'}
  }

  @Get('by-zipcode')
  async getByZipcode(@Query('zipcode') zipcode: string) {
    const locations = await this.locationModel.find({ d_codigo: zipcode }).populate('state');
    return locations;
  }

}

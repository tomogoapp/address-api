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
/**
 * The function `migrateData` asynchronously migrates data using a file path and returns a success
 * message.
 * @param {string} filePath - The `filePath` parameter in the `migrateData` function is a query
 * parameter that specifies the path to the file containing the data to be migrated.
 * @returns The function `migrateData` is returning an object with a message property indicating that
 * the data migration was completed successfully.
 */
  async migrateData(@Query('filePath') filePath:string){
    await this.migrationService.migrateData(filePath)
    return {message: 'Data migration complete successfully'}
  }

  @Get('by-zipcode')
/**
 * This TypeScript function retrieves locations based on a given zipcode and populates the state
 * information.
 * @param {string} zipcode - The `getByZipcode` function is an asynchronous function that takes a
 * `zipcode` parameter as a query parameter. The function queries the `locationModel` to find locations
 * with the specified `d_codigo` (zipcode) and populates the `state` field for each location. Finally,
 * it
 * @returns The function `getByZipcode` is returning locations that match the provided `zipcode`
 * parameter. The locations are retrieved from the database using the `locationModel` and filtered
 * based on the `d_codigo` field matching the provided `zipcode`. The function also populates the
 * `state` field for each location before returning the results.
 */
  async getByZipcode(@Query('zipcode') zipcode: string) {
    const locations = await this.locationModel.find({ d_codigo: zipcode }).populate('state');
    return locations;
  }

}

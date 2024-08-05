import { Module } from '@nestjs/common'
import { MigrationService } from './migration.service'
import { MigrationController } from './migration.controller'
import { MongooseModule } from '@nestjs/mongoose'
import { Location,LocationSchema,State,StateSchema } from './entities'
import { ReadXlsFileService } from 'src/read_xls_file/read_xls_file.service'

@Module({
  controllers: [MigrationController],
  providers: [MigrationService,ReadXlsFileService],
  imports:[
    MongooseModule.forFeature([
      { name: Location.name, schema: LocationSchema }
    ]),
    MongooseModule.forFeature([
      { name: State.name, schema: StateSchema }
    ])
  ],
  exports:[
    MongooseModule.forFeature([{ name: Location.name, schema: LocationSchema }])
  ]
})
export class MigrationModule {}

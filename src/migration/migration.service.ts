import { Inject, Injectable } from '@nestjs/common'
import { InjectModel } from '@nestjs/mongoose'
import { Location, State } from './entities'
import { Model } from 'mongoose'
import { ReadXlsFileService } from 'src/read_xls_file/read_xls_file.service'

@Injectable()
export class MigrationService {

  constructor(

    @Inject(ReadXlsFileService)
    private readonly readXlsFileService : ReadXlsFileService,

    @InjectModel 
    (State.name) private stateModel: Model<State>,

    @InjectModel
    (Location.name) private locationModel: Model<Location>,

  ){}

  async migrateData(filePath: string): Promise<void>{

    await this.locationModel.deleteMany({})
    await this.stateModel.deleteMany({})


    const data = await this.readXlsFileService.readExcelFileArray(filePath)

    for ( const { stateName,sheetData } of data ) {

      let state = await this.stateModel.findOne({name: stateName})

      if(!state){
        state = new this.stateModel({ name:stateName })
        await state.save()
      }

      const locations = sheetData.map(row => ({
        d_codigo: row[0] || 'N/A',
        d_asenta: row[1] || 'N/A',
        //d_tipo_asenta: row[2] || 'N/A',
        D_mnpio: row[3] || 'N/A',
        d_estado: row[4] || 'N/A',
        // d_ciudad: row[5] || 'N/A',
        // d_CP: row[6] || '00000',
        c_estado: row[7] || 'N/A',
        //c_oficina: row[8] || 'N/A',       // Comentado
        // c_CP: row[9] || '00000',          // Comentado
        // c_tipo_asenta: row[10] || 'N/A',  // Comentado
        // c_mnpio: row[11] || 'N/A',        // Comentado
        id_asenta_cpcons: row[12] || 'N/A', // Comentado
        // d_zona: row[13] || 'N/A',         // Comentado
        // c_cve_ciudad: row[14] || 'N/A',   // Comentado
        state: state._id || 'N/A'         // Comentado
      }));

      await this.locationModel.insertMany(locations)

    }

  }

}

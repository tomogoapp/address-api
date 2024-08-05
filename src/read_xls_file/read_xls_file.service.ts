
import { Injectable } from '@nestjs/common';
import * as XLSX from 'xlsx';

@Injectable()
export class ReadXlsFileService {

  readExcelFile(filePath: string): any[] {
    const workbook = XLSX.readFile(filePath);
    const sheetNameList = workbook.SheetNames;
    const worksheet = workbook.Sheets[sheetNameList[1]];
    const data = XLSX.utils.sheet_to_json(worksheet, { header: 1 });

    return data;
  }

  async readExcelFileArray(filePath: string): Promise<any[]>{
    const workbook = XLSX.readFile(filePath)
    const sheetNameList = workbook.SheetNames
    const data = []

    for( let i=1; i < sheetNameList.length; i++ ){

      const sheetName = sheetNameList[i]
      const worksheet = workbook.Sheets[sheetName]
      const sheetData = XLSX.utils.sheet_to_json(worksheet,{header:1})
      const stateName = sheetData[1][0]

      data.push({ stateName, sheetData: sheetData.slice(1) })
    }
    return data
  }
}



import { Controller, Get, Query } from '@nestjs/common';
import { ReadXlsFileService } from './read_xls_file.service';

@Controller('excel')
export class ReadXlsFileController {
  constructor(
    private readonly readXlsFileService: ReadXlsFileService
  ) {}

  @Get('readfile')
  async readExcel(@Query('filePath') filePath: string) {
    const data = await this.readXlsFileService.readExcelFile(filePath);
    return data;
  }
}


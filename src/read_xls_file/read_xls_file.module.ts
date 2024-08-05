import { Module } from '@nestjs/common';
import { ReadXlsFileService } from './read_xls_file.service';
import { ReadXlsFileController } from './read_xls_file.controller';

@Module({
  controllers: [ReadXlsFileController],
  providers: [ReadXlsFileService],
  exports:[
    ReadXlsFileService,
    ReadXlsFileModule
  ]
})
export class ReadXlsFileModule {}

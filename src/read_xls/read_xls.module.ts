import { Module } from '@nestjs/common';
import { ReadXlsService } from './read_xls.service';
import { ReadXlsController } from './read_xls.controller';

@Module({
  controllers: [ReadXlsController],
  providers: [ReadXlsService],
})
export class ReadXlsModule {}

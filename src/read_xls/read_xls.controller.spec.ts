import { Test, TestingModule } from '@nestjs/testing';
import { ReadXlsController } from './read_xls.controller';
import { ReadXlsService } from './read_xls.service';

describe('ReadXlsController', () => {
  let controller: ReadXlsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ReadXlsController],
      providers: [ReadXlsService],
    }).compile();

    controller = module.get<ReadXlsController>(ReadXlsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});

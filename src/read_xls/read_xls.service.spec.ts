import { Test, TestingModule } from '@nestjs/testing';
import { ReadXlsService } from './read_xls.service';

describe('ReadXlsService', () => {
  let service: ReadXlsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ReadXlsService],
    }).compile();

    service = module.get<ReadXlsService>(ReadXlsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});

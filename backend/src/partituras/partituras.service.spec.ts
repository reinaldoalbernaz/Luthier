import { Test, TestingModule } from '@nestjs/testing';
import { PartiturasService } from './partituras.service';

describe('PartiturasService', () => {
  let service: PartiturasService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [PartiturasService],
    }).compile();

    service = module.get<PartiturasService>(PartiturasService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});

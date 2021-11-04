import { Test, TestingModule } from '@nestjs/testing';
import { PartiturasController } from './partituras.controller';
import { PartiturasService } from './partituras.service';

describe('PartiturasController', () => {
  let controller: PartiturasController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [PartiturasController],
      providers: [PartiturasService],
    }).compile();

    controller = module.get<PartiturasController>(PartiturasController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});

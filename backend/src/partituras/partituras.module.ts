import { Module } from '@nestjs/common';
import { PartiturasService } from './partituras.service';
import { PartiturasController } from './partituras.controller';

@Module({
  controllers: [PartiturasController],
  providers: [PartiturasService],
})
export class PartiturasModule {}

import { Module } from '@nestjs/common';
import { PartiturasModule } from './partituras/partituras.module';

@Module({
  imports: [PartiturasModule],
  controllers: [],
  providers: [],
})
export class AppModule {}

import { Body, Controller, Delete, Get, Param, Post } from '@nestjs/common';

import { CreatePartituraDto } from './dto/create-partitura.dto';
import { PartiturasService } from './partituras.service';

@Controller('partituras')
export class PartiturasController {
  constructor(private readonly partiturasService: PartiturasService) {}

  @Post()
  create(@Body() createPartituraDto: CreatePartituraDto) {
    return this.partiturasService.create(createPartituraDto);
  }

  @Get()
  findAll() {
    return this.partiturasService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.partiturasService.findOne(+id);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.partiturasService.remove(+id);
  }
}

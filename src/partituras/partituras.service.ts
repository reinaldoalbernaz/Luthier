import { Injectable } from '@nestjs/common';
import { CreatePartituraDto } from './dto/create-partitura.dto';
import { UpdatePartituraDto } from './dto/update-partitura.dto';

@Injectable()
export class PartiturasService {
  create(createPartituraDto: CreatePartituraDto) {
    return 'This action adds a new partitura';
  }

  findAll() {
    return JSON.stringify({ partituras: `Todas partituras` });
  }

  findOne(id: number) {
    return `This action returns a #${id} partitura`;
  }

  update(id: number, updatePartituraDto: UpdatePartituraDto) {
    return `This action updates a #${id} partitura`;
  }

  remove(id: number) {
    return `This action removes a #${id} partitura`;
  }
}

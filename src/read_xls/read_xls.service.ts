import { Injectable } from '@nestjs/common';
import { CreateReadXlDto } from './dto/create-read_xl.dto';
import { UpdateReadXlDto } from './dto/update-read_xl.dto';

@Injectable()
export class ReadXlsService {
  create(createReadXlDto: CreateReadXlDto) {
    return 'This action adds a new readXl';
  }

  findAll() {
    return `This action returns all readXls`;
  }

  findOne(id: number) {
    return `This action returns a #${id} readXl`;
  }

  update(id: number, updateReadXlDto: UpdateReadXlDto) {
    return `This action updates a #${id} readXl`;
  }

  remove(id: number) {
    return `This action removes a #${id} readXl`;
  }
}

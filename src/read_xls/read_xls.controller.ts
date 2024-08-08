import { Controller } from '@nestjs/common';
import { MessagePattern, Payload } from '@nestjs/microservices';
import { ReadXlsService } from './read_xls.service';
import { CreateReadXlDto } from './dto/create-read_xl.dto';
import { UpdateReadXlDto } from './dto/update-read_xl.dto';

@Controller()
export class ReadXlsController {
  constructor(private readonly readXlsService: ReadXlsService) {}

  @MessagePattern('createReadXl')
  create(@Payload() createReadXlDto: CreateReadXlDto) {
    return this.readXlsService.create(createReadXlDto);
  }

  @MessagePattern('findAllReadXls')
  findAll() {
    return this.readXlsService.findAll();
  }

  @MessagePattern('findOneReadXl')
  findOne(@Payload() id: number) {
    return this.readXlsService.findOne(id);
  }

  @MessagePattern('updateReadXl')
  update(@Payload() updateReadXlDto: UpdateReadXlDto) {
    return this.readXlsService.update(updateReadXlDto.id, updateReadXlDto);
  }

  @MessagePattern('removeReadXl')
  remove(@Payload() id: number) {
    return this.readXlsService.remove(id);
  }
}

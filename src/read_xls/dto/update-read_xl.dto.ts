import { PartialType } from '@nestjs/mapped-types';
import { CreateReadXlDto } from './create-read_xl.dto';

export class UpdateReadXlDto extends PartialType(CreateReadXlDto) {
  id: number;
}

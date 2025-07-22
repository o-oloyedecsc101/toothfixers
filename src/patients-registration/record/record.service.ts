import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Record } from './entities/record.entity';
import { CreateRecordDto } from './dto/create-record.dto';
import { UpdateRecordDto } from './dto/update-record.dto';

@Injectable()
export class RecordService {
  constructor(
    @InjectRepository(Record)
    private recordsRepository: Repository<Record>,
  ) { }

  async create(createRecordDto: CreateRecordDto) {
    const newRecord: Record = this.recordsRepository.create(createRecordDto);
    return this.recordsRepository.save(newRecord);
  }

  async findAll() {
    return await this.recordsRepository.find();
  }

  async findOne(id: number) {
    return await this.recordsRepository.findOne({
      where: { id },
    });
  }

  async update(id: number, updateRecordDto: UpdateRecordDto) {
    return await this.recordsRepository.update(id, updateRecordDto);
  }

  async remove(id: number) {
    return await this.recordsRepository.delete(id);
  }
}


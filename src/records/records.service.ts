import { Record } from './entities/record.entity';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateRecordInput } from './dto/create-record.input';
import { Repository } from 'typeorm';

@Injectable()
export class RecordsService {
  constructor(
    @InjectRepository(Record) private recordsRepository: Repository<Record>,
  ) {}

  async create(createRecordInput: CreateRecordInput): Promise<Record> {
    const record = this.recordsRepository.create(createRecordInput);
    return this.recordsRepository.save(record);
  }

  async findAll(): Promise<Record[]> {
    return this.recordsRepository.find();
  }

  async findOne(id: number): Promise<Record> {
    return this.recordsRepository.findOneOrFail({
      where: {
        id,
      },
    });
  }

  async findByDomainId(domainId: number): Promise<Record[]> {
    return this.recordsRepository.find({
      where: {
        domainId,
      },
    });
  }

  remove(id: number) {
    return `This action removes a #${id} record`;
  }
}

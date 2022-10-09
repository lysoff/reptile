import { Domain } from './entities/domain.entity';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateDomainInput } from './dto/create-domain.input';
import { Repository } from 'typeorm';

@Injectable()
export class DomainsService {
  constructor(
    @InjectRepository(Domain) private domainsRepository: Repository<Domain>,
  ) {}

  async create(createDomainInput: CreateDomainInput): Promise<Domain> {
    const domain = this.domainsRepository.create(createDomainInput);
    return this.domainsRepository.save(domain);
  }

  async findAll(): Promise<Domain[]> {
    return this.domainsRepository.find();
  }

  async findOne(id: number): Promise<Domain> {
    return this.domainsRepository.findOneOrFail({
      where: {
        id,
      },
    });
  }

  remove(id: number) {
    return `This action removes a #${id} domain`;
  }
}

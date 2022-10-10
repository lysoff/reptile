import { RecordsService } from './../records/records.service';
import { Record } from './../records/entities/record.entity';
import {
  Resolver,
  Query,
  Mutation,
  Args,
  Int,
  ResolveField,
  Parent,
} from '@nestjs/graphql';
import { DomainsService } from './domains.service';
import { Domain } from './entities/domain.entity';
import { CreateDomainInput } from './dto/create-domain.input';

@Resolver(() => Domain)
export class DomainsResolver {
  constructor(
    private readonly domainsService: DomainsService,
    private recordsService: RecordsService,
  ) {}

  @Mutation(() => Domain)
  createDomain(
    @Args('createDomainInput') createDomainInput: CreateDomainInput,
  ) {
    return this.domainsService.create(createDomainInput);
  }

  @Query(() => [Domain], { name: 'domains' })
  findAll() {
    return this.domainsService.findAll();
  }

  @Query(() => Domain, { name: 'domain' })
  findOne(@Args('id', { type: () => Int }) id: number) {
    return this.domainsService.findOne(id);
  }

  @Mutation(() => Domain)
  removeDomain(@Args('id', { type: () => Int }) id: number) {
    return this.domainsService.remove(id);
  }

  @ResolveField(() => [Record], { name: 'records' })
  getRecords(@Parent() domain: Domain): Promise<Record[]> {
    return this.recordsService.findByDomainId(domain.id);
  }
}

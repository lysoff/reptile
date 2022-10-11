import { DomainsService } from './../domains/domains.service';
import { Domain } from './../domains/entities/domain.entity';
import {
  Resolver,
  Query,
  Mutation,
  Args,
  Int,
  ResolveField,
  Parent,
} from '@nestjs/graphql';
import { RecordsService } from './records.service';
import { Record } from './entities/record.entity';
import { CreateRecordInput } from './dto/create-record.input';

@Resolver(() => Record)
export class RecordsResolver {
  constructor(
    private readonly recordsService: RecordsService,
    private domainsService: DomainsService,
  ) {}

  @Mutation(() => Record)
  createRecord(
    @Args('createRecordInput') createRecordInput: CreateRecordInput,
  ) {
    return this.recordsService.create(createRecordInput);
  }

  @Query(() => [Record], { name: 'records' })
  findAll() {
    return this.recordsService.findAll();
  }

  @Query(() => Record, { name: 'record' })
  findOne(@Args('id', { type: () => Int }) id: number) {
    return this.recordsService.findOne(id);
  }

  @Mutation(() => Record)
  removeRecord(@Args('id', { type: () => Int }) id: number) {
    return this.recordsService.remove(id);
  }

  // How do we implement this resolve field, and do we actually need it?
  @ResolveField(() => Domain, { name: 'domain' })
  getDomain(@Parent() record: Record): Promise<Domain> {
    return this.domainsService.findOne(record.domainId);
  }
}

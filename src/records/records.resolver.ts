import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { RecordsService } from './records.service';
import { Record } from './entities/record.entity';
import { CreateRecordInput } from './dto/create-record.input';

@Resolver(() => Record)
export class RecordsResolver {
  constructor(private readonly recordsService: RecordsService) {}

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
}

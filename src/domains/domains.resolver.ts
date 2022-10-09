import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { DomainsService } from './domains.service';
import { Domain } from './entities/domain.entity';
import { CreateDomainInput } from './dto/create-domain.input';

@Resolver(() => Domain)
export class DomainsResolver {
  constructor(private readonly domainsService: DomainsService) {}

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
}

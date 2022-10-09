import { Test, TestingModule } from '@nestjs/testing';
import { DomainsResolver } from './domains.resolver';
import { DomainsService } from './domains.service';

describe('DomainsResolver', () => {
  let resolver: DomainsResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [DomainsResolver, DomainsService],
    }).compile();

    resolver = module.get<DomainsResolver>(DomainsResolver);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });
});

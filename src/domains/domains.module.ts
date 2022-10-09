import { Domain } from './entities/domain.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Module } from '@nestjs/common';
import { DomainsService } from './domains.service';
import { DomainsResolver } from './domains.resolver';

@Module({
  imports: [TypeOrmModule.forFeature([Domain])],
  providers: [DomainsResolver, DomainsService],
})
export class DomainsModule {}

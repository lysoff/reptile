import { DomainsModule } from './../domains/domains.module';
import { Module } from '@nestjs/common';
import { UsersService } from './users.service';
import { UsersResolver } from './users.resolver';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './entities/user.entity';

@Module({
  imports: [TypeOrmModule.forFeature([User]), DomainsModule],
  providers: [UsersResolver, UsersService],
})
export class UsersModule {}

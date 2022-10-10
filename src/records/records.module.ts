import { Record } from './entities/record.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Module } from '@nestjs/common';
import { RecordsService } from './records.service';
import { RecordsResolver } from './records.resolver';

@Module({
  imports: [TypeOrmModule.forFeature([Record])],
  providers: [RecordsResolver, RecordsService],
  exports: [RecordsService],
})
export class RecordsModule {}

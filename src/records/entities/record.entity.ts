import { Domain } from './../../domains/entities/domain.entity';
import { ObjectType, Field, Int } from '@nestjs/graphql';
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';

@ObjectType()
@Entity()
export class Record {
  @Field(() => Int)
  @PrimaryGeneratedColumn()
  id: number;

  @Field()
  @Column()
  caption: string;

  @Field()
  @Column()
  url: string;

  @Field(() => Int)
  @Column()
  domainId: number;

  @Field(() => Domain)
  @ManyToOne(() => Domain, (domain) => domain.records)
  domain: Domain;
}

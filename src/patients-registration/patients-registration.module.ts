import { Module } from '@nestjs/common';
import { RecordModule } from './record/record.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { RecordController } from './Record/record.controller';
import { RecordService } from './Record/record.service';
import { Record } from './record/entities/record.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Record])],
  controllers: [RecordController],
  providers: [RecordService]
})

export class PatientsRegistrationModule {}

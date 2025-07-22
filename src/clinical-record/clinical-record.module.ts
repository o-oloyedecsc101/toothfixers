import { Module } from '@nestjs/common';
import { PatientController } from './Patient/patient.controller';
import { PatientService } from './Patient/patient.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Patient } from './patient/entities/patient.entity';
@Module({
  imports: [TypeOrmModule.forFeature([Patient])],
  controllers: [PatientController],
  providers: [PatientService]
})
export class ClinicalRecordModule { }
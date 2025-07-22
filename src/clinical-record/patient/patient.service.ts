import { Injectable } from '@nestjs/common';
import { CreatePatientDto } from './dto/create-patient.dto';
import { UpdatePatientDto } from './dto/update-patient.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Patient } from './entities/patient.entity';

@Injectable()
export class PatientService {
  constructor(
    @InjectRepository(Patient)
    private patientsRepository: Repository<Patient>,
  ) { }

  async create(createPatientDto: CreatePatientDto) {
    const newPatient: Patient = this.patientsRepository.create(createPatientDto);
    return this.patientsRepository.save(newPatient);
  }

  async findAll() {
    return await this.patientsRepository.find();
  }

  async findOne(id: number) {
    return await this.patientsRepository.findOne({
      where: { id },
    });
  }

  async update(id: number, updatePatientDto: UpdatePatientDto) {
    await this.patientsRepository.update(id, updatePatientDto);
    return this.patientsRepository.findOne({
      where: { id },
    });
  }

  async remove(id: number) {
    return await this.patientsRepository.delete(id);
  }
}

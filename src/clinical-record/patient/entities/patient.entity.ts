import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";


@Entity('Patient')
export class Patient {
    @Column()
    clinicDate: string;
    @Column({ nullable: true })
    natureOfAilment: string;
    @Column()
    medicinePrescribed: string;
    @Column({ nullable: true })
    procedureUnderTaken: string;
    @Column({ nullable: true })
    dateOfNextAppointment: string;
    @PrimaryGeneratedColumn()
    id: number;

   

}
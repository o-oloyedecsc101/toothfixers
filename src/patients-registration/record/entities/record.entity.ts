import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";
 
export class Record {
    @PrimaryGeneratedColumn()
    id: number;
    @Column()
    firstName: string;
    @Column({ nullable: true }) 
    surName: string;
    @Column()
    middleName: string;
    @Column()
    homeAddress: string;
    @Column({ nullable: true })
    dateOfRegistration: string;
    @Column()
    _matriculationNumber: boolean;
    
}


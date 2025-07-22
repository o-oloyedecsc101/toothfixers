import React, { useState } from 'react';
import { createClinicalRecord } from '../services/clinicalRecordService';


const CreateClinicalRecord: React.FC = () => {
    const [clinicalRecord, setClinicalRecord] = useState({
        clinicDate: '',
        natureOfAilment: '',
        medicinePrescribed: '',
        procedureUnderTaken: '',
        dateOfNextAppointment: '',
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setClinicalRecord({ ...clinicalRecord, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        try {
            await createClinicalRecord(clinicalRecord);

        } catch (error) {
            console.error('Failed to create clinical record', error);
        }
    };

    return (
        <div className="form-container">
            <h2>Create Clinical Record</h2>
            <form onSubmit={handleSubmit} className="form">
                <div className="form-group">
                    <label htmlFor="clinicDate">Clinic Date</label>
                    <input type="date" id="clinicDate" name="clinicDate" onChange={handleChange} required />
                </div>
                <div className="form-group">
                    <label htmlFor="natureOfAilment">Nature of Ailment</label>
                    <input type="text" id="natureOfAilment" name="natureOfAilment" onChange={handleChange} required />
                </div>
                <div className="form-group">
                    <label htmlFor="medicinePrescribed">Medicine Prescribed</label>
                    <input type="text" id="medicinePrescribed" name="medicinePrescribed" onChange={handleChange} required />
                </div>
                <div className="form-group">
                    <label htmlFor="procedureUnderTaken">Procedure Undertaken</label>
                    <input type="text" id="procedureUnderTaken" name="procedureUnderTaken" onChange={handleChange} required />
                </div>
                <div className="form-group">
                    <label htmlFor="dateOfNextAppointment">Date of Next Appointment</label>
                    <input type="date" id="dateOfNextAppointment" name="dateOfNextAppointment" onChange={handleChange} required />
                </div>
                <button type="submit" className="submit-button">Create Clinical Record</button>
            </form>
        </div>
    );
};

export default CreateClinicalRecord;

import React, { useState } from 'react';
import { createPatient } from '../services/patientService';
import CreateClinicalRecord from './CreateClinicalRecord';


const CreatePatient: React.FC = () => {
  const [patient, setPatient] = useState({
    firstName: '',
    surName: '',
    middleName: '',
    dateOfBirth: '',
    homeAddress: '',
    dateOfRegistration: '',
    _matriculationNumber: false,
  });
  const [isPatientCreated, setIsPatientCreated] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked } = e.target;
    setPatient({
      ...patient,
      [name]: type === 'checkbox' ? checked : value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      console.log(patient);
      await createPatient(patient);
      setIsPatientCreated(true);
    } catch (error) {
      console.error('Failed to create patient', error);
    }
  };

  return (
    <div className="create-patient-container">
      {isPatientCreated ? (
        <div>
          <p>Patient created successfully!</p>
          <CreateClinicalRecord />
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="create-patient-form">
          <h2>Create Patient</h2>
          <input
            type="text"
            name="firstName"
            placeholder="First Name"
            onChange={handleChange}
            required
          />
          <input
            type="text"
            name="surName"
            placeholder="Surname"
            onChange={handleChange}
            required
          />
          <input
            type="text"
            name="middleName"
            placeholder="Middle Name"
            onChange={handleChange}
          />
          <input
            type="date"
            name="dateOfBirth"
            placeholder="Date of Birth"
            onChange={handleChange}
            required
          />
          <input
            type="text"
            name="homeAddress"
            placeholder="Home Address"
            onChange={handleChange}
            required
          />
          <input
            type="date"
            name="dateOfRegistration"
            placeholder="Date of Registration"
            onChange={handleChange}
            required
          />
          <div className="checkbox-container">
            <label>
              <input
                type="checkbox"
                name="_matriculationNumber"
                onChange={handleChange}
              />
              Matriculation Number
            </label>
          </div>
          <button type="submit" className="create-button">Create Patient</button>
        </form>
      )}
    </div>
  );
};

export default CreatePatient;

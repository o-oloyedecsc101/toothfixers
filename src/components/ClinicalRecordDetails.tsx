import React, { useState, useEffect } from 'react';
import axios from 'axios';


const ClinicalRecordDetails: React.FC = () => {
  const [clinicalRecords, setClinicalRecords] = useState<any[]>([]);
  const [errorMessage, setErrorMessage] = useState('');

  useEffect(() => {
    const fetchClinicalRecords = async () => {
      try {
        const response = await axios.get('http://localhost:3000/patient');
        setClinicalRecords(response.data);
        setErrorMessage('');
      } catch (error) {
        console.error('Error fetching clinical records:', error);
        setErrorMessage('Failed to fetch clinical records. Please try again.');
      }
    };

    fetchClinicalRecords();
  }, []);

  const records = clinicalRecords.map((data) => {
    console.log(data.id) //logs the values

    return data.id
  });

  console.log(records) // returns as an array of the values

  return (
    <div className="table-container">
      <h1>Clinical Record Details</h1>
      {clinicalRecords.length > 0 ? (
        <table>
          <thead>
            <tr>
              <th>Patient ID</th>
              <th>Clinic Date</th>
              <th>Nature of Ailment</th>
              <th>Medicine Prescribed</th>
              <th>Procedure Undertaken</th>
              <th>Date of Next Appointment</th>
            </tr>
          </thead>
          <tbody>
            {clinicalRecords.map((record, index) => (
              <tr key={index}>
                <td>{record.id}</td>
                <td>{record.clinicDate}</td>
                <td>{record.natureOfAilment}</td>
                <td>{record.medicinePrescribed}</td>
                <td>{record.procedureUnderTaken}</td>
                <td>{record.dateOfNextAppointment}</td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <p>No clinical records available.</p>
      )}
      {errorMessage && <p className="error-message">{errorMessage}</p>}
    </div>
  );
};

export default ClinicalRecordDetails;




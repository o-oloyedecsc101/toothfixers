import React, { useState, useEffect } from 'react';
import axios from 'axios';


const PatientDetails: React.FC = () => {
  const [patients, setPatients] = useState([]);
  const [errorMessage, setErrorMessage] = useState('');

  useEffect(() => {
    const fetchPatients = async () => {
      try {
        const response = await axios.get('http://localhost:3000/record');
        setPatients(response.data);
        setErrorMessage('');
      } catch (error) {
        console.error('Error fetching patients:', error);
        setErrorMessage('Failed to fetch patients. Please try again.');
      }
    };

    fetchPatients();
  }, []);

  return (
    <div className="table-container">
      <h1>Patient Details</h1>
      {patients.length > 0 ? (
        <table>
          <thead>
            <tr>
              <th>First Name</th>
              <th>Last Name</th>
              <th>Middle Name</th>
              <th>Home Address</th>
              <th>Registration Date</th>
              
            </tr>
          </thead>
          <tbody>
            {patients.map((patient, index) => (
              <tr key={index}>
                <td>{patient.firstName}</td>
                <td>{patient.surName}</td>
                <td>{patient.middleName}</td>
                <td>{patient.homeAddress}</td>
                <td>{patient.dateOfRegistration}</td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <p>No patient records available.</p>
      )}
      {errorMessage && <p className="error-message">{errorMessage}</p>}
    </div>
  );
};

export default PatientDetails;

import React, { useState, useEffect } from 'react';
import axios from 'axios';

const UpdateDeletePatients: React.FC = () => {
  const [patients, setPatients] = useState([]);
  const [editingPatient, setEditingPatient] = useState(null);
  const [formData, setFormData] = useState({
    firstName: '',
    surName: '',
    middleName: '',
    homeAddress: '',
    dateOfRegistration: '',
    _matriculationNumber: false
  });
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

  const handleEditClick = (patient) => {
    setEditingPatient(patient.id);
    setFormData({
      ...patient,
      _matriculationNumber: patient._matriculationNumber || false
    });
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked } = e.target;
    setFormData({ ...formData, [name]: type === 'checkbox' ? checked : value });
  };

  const handleUpdateSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await axios.patch(`http://localhost:3000/record/${editingPatient}`, formData);
      setPatients(patients.map(patient => (patient.id === editingPatient ? { ...patient, ...formData } : patient)));
      setEditingPatient(null);
      setErrorMessage('');
    } catch (error) {
      console.error('Error updating patient:', error);
      setErrorMessage('Failed to update patient. Please try again.');
    }
  };

  const handleDeleteClick = async (id: number) => {
    try {
      await axios.delete(`http://localhost:3000/record/${id}`);
      setPatients(patients.filter(patient => patient.id !== id));
      setErrorMessage('');
    } catch (error) {
      console.error('Error deleting patient:', error);
      setErrorMessage('Failed to delete patient. Please try again.');
    }
  };

  return (
    <div className="update-delete-container">
      <h1>Update or Delete Patients</h1>
      {patients.length > 0 ? (
        <table>
          <thead>
            <tr>
              <th>First Name</th>
              <th>Surname</th>
              <th>Middle Name</th>
              <th>Home Address</th>
              <th>Registration Date</th>
              <th>Matriculation Number</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {patients.map((patient) => (
              <tr key={patient.id}>
                <td>{patient.firstName}</td>
                <td>{patient.surName}</td>
                <td>{patient.middleName}</td>
                <td>{patient.homeAddress}</td>
                <td>{patient.dateOfRegistration}</td>
                <td>{patient._matriculationNumber ? 'Yes' : 'No'}</td>
                <td>
                  <button onClick={() => handleEditClick(patient)}>Edit</button>
                  <button onClick={() => handleDeleteClick(patient.id)}>Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <p>No patient records available.</p>
      )}
      {errorMessage && <p className="error-message">{errorMessage}</p>}

      {editingPatient && (
        <div className="edit-form-container">
          <h2>Edit Patient</h2>
          <form onSubmit={handleUpdateSubmit} className="edit-form">
            <div className="form-group">
              <label htmlFor="firstName">First Name</label>
              <input type="text" id="firstName" name="firstName" value={formData.firstName} onChange={handleInputChange} required />
            </div>
            <div className="form-group">
              <label htmlFor="surName">Surname</label>
              <input type="text" id="surName" name="surName" value={formData.surName} onChange={handleInputChange} required />
            </div>
            <div className="form-group">
              <label htmlFor="middleName">Middle Name</label>
              <input type="text" id="middleName" name="middleName" value={formData.middleName} onChange={handleInputChange} required />
            </div>
            <div className="form-group">
              <label htmlFor="homeAddress">Home Address</label>
              <input type="text" id="homeAddress" name="homeAddress" value={formData.homeAddress} onChange={handleInputChange} required />
            </div>
            <div className="form-group">
              <label htmlFor="dateOfRegistration">Registration Date</label>
              <input type="date" id="dateOfRegistration" name="dateOfRegistration" value={formData.dateOfRegistration} onChange={handleInputChange} required />
            </div>
            <div className="form-group">
              <label htmlFor="_matriculationNumber">Matriculation Number</label>
              <input type="checkbox" id="_matriculationNumber" name="_matriculationNumber" checked={formData._matriculationNumber} onChange={handleInputChange} />
            </div>
            <button type="submit" className="submit-button">Update Patient</button>
          </form>
        </div>
      )}
    </div>
  );
};

export default UpdateDeletePatients;

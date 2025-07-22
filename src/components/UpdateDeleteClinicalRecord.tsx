import React, { useState, useEffect } from 'react';
import axios from 'axios';

const UpdateDeleteClinicalRecords: React.FC = () => {
  const [clinicalRecords, setClinicalRecords] = useState([]);
  const [editingRecord, setEditingRecord] = useState(null);
  const [formData, setFormData] = useState({
    clinicDate: '',
    natureOfAilment: '',
    medicinePrescribed: '',
    procedureUnderTaken: '',
    dateOfNextAppointment: ''
  });
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

  const handleEditClick = (record) => {
    setEditingRecord(record.id);
    setFormData({ ...record });
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleUpdateSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await axios.patch(`http://localhost:3000/patient/${editingRecord}`, formData);
      setClinicalRecords(clinicalRecords.map(record => (record.id === editingRecord ? { ...record, ...formData } : record)));
      setEditingRecord(null);
      setErrorMessage('');
    } catch (error) {
      console.error('Error updating clinical record:', error);
      setErrorMessage('Failed to update clinical record. Please try again.');
    }
  };

  const handleDeleteClick = async (id: number) => {
    try {
      await axios.delete(`http://localhost:3000/patient/${id}`);
      setClinicalRecords(clinicalRecords.filter(record => record.id !== id));
      setErrorMessage('');
    } catch (error) {
      console.error('Error deleting clinical record:', error);
      setErrorMessage('Failed to delete clinical record. Please try again.');
    }
  };

  return (
    <div className="update-delete-container">
      <h1>Update or Delete Clinical Records</h1>
      {clinicalRecords.length > 0 ? (
        <table>
          <thead>
            <tr>
              <th>Clinic Date</th>
              <th>Nature of Ailment</th>
              <th>Medicine Prescribed</th>
              <th>Procedure Undertaken</th>
              <th>Date of Next Appointment</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {clinicalRecords.map((record) => (
              <tr key={record.id}>
                <td>{record.clinicDate}</td>
                <td>{record.natureOfAilment}</td>
                <td>{record.medicinePrescribed}</td>
                <td>{record.procedureUnderTaken}</td>
                <td>{record.dateOfNextAppointment}</td>
                <td>
                  <button onClick={() => handleEditClick(record)}>Edit</button>
                  <button onClick={() => handleDeleteClick(record.id)}>Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <p>No clinical records available.</p>
      )}
      {errorMessage && <p className="error-message">{errorMessage}</p>}

      {editingRecord && (
        <div className="edit-form-container">
          <h2>Edit Clinical Record</h2>
          <form onSubmit={handleUpdateSubmit} className="edit-form">
            <div className="form-group">
              <label htmlFor="clinicDate">Clinic Date</label>
              <input type="date" id="clinicDate" name="clinicDate" value={formData.clinicDate} onChange={handleInputChange} required />
            </div>
            <div className="form-group">
              <label htmlFor="natureOfAilment">Nature of Ailment</label>
              <input type="text" id="natureOfAilment" name="natureOfAilment" value={formData.natureOfAilment} onChange={handleInputChange} required />
            </div>
            <div className="form-group">
              <label htmlFor="medicinePrescribed">Medicine Prescribed</label>
              <input type="text" id="medicinePrescribed" name="medicinePrescribed" value={formData.medicinePrescribed} onChange={handleInputChange} required />
            </div>
            <div className="form-group">
              <label htmlFor="procedureUnderTaken">Procedure Undertaken</label>
              <input type="text" id="procedureUnderTaken" name="procedureUnderTaken" value={formData.procedureUnderTaken} onChange={handleInputChange} required />
            </div>
            <div className="form-group">
              <label htmlFor="dateOfNextAppointment">Date of Next Appointment</label>
              <input type="date" id="dateOfNextAppointment" name="dateOfNextAppointment" value={formData.dateOfNextAppointment} onChange={handleInputChange} required />
            </div>
            <button type="submit" className="submit-button">Update Clinical Record</button>
          </form>
        </div>
      )}
    </div>
  );
};

export default UpdateDeleteClinicalRecords;


import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Homepage from './components/Homepage';
import CreatePatient from './components/CreatePatients';
import CreateClinicalRecord from './components/CreateClinicalRecord';
import PatientDetails from './components/PatientDetails';
import ClinicalRecordDetails from './components/ClinicalRecordDetails';
import Navbar from './components/Navbar';
import UpdateDelete from './components/UpdateDelete';
import UpdateDeleteClinicalRecord from './components/UpdateDeleteClinicalRecord'

const App: React.FC = () => {
    return (
        <Router>
            <Navbar />
            <Routes>
                <Route path="/" element={<Homepage />} />
                <Route path="/patients/create" element={<CreatePatient />} />
                <Route path="/clinical-records/create" element={<CreateClinicalRecord />} />
                <Route path="/patients" element={<PatientDetails />} />
                <Route path="/clinical-records" element={<ClinicalRecordDetails />} />
                <Route path="/patients/UpdateDelete" element={<UpdateDelete />} />
                <Route path="/patients/UpdateDeleteClinicalRecord" element={<UpdateDeleteClinicalRecord />} />
            </Routes>
        </Router>
    );
};

export default App;

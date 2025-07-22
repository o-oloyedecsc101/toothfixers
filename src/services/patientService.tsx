import axios from 'axios';

const API_URL = 'http://localhost:3000';

export const getPatients = async () => {
    return await axios.get(`${API_URL}/patients`);
};

export const getPatient = async (id: number) => {
    return await axios.get(`${API_URL}${id}`);
};

export const createPatient = async (patientData: any) => {
    console.log(patientData)
    return await axios.post(`${API_URL}/record`, patientData);
};

export const updatePatient = async (id: number, patientData: any) => {
    return await axios.put(`${API_URL}/record${id}`, patientData);
};

export const deletePatient = async (id: number) => {
    return await axios.delete(`${API_URL}/record/${id}`);
};

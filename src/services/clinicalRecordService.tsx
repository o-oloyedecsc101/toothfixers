import axios from 'axios';

const API_URL = 'http://localhost:3000/patient'; 

export const createClinicalRecord = async (clinicalRecordData: any) => {
    return await axios.post(`${API_URL}`, clinicalRecordData);
};

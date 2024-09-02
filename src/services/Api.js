import axios from 'axios';

const API_URL = 'https://api.example.com/students';

export const fetchStudents = () => axios.get(API_URL);
export const fetchStudentById = (id) => axios.get(`${API_URL}/${id}`);

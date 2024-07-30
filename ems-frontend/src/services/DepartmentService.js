import axios from 'axios';

const DEPARTMENT_API_BASE_URL = 'http://localhost:8080/api/departments';

export const getAllDepartments = () => axios.get(DEPARTMENT_API_BASE_URL)
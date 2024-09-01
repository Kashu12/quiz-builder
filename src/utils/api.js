import axios from 'axios';

export const getUserQuizzes = async () => {
  const token = localStorage.getItem('token');
  return await axios.get('/api/quizzes', {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
};

const API_URL = 'http://localhost:5001/api';

export const registerUser = async (userData) => {
  return await axios.post(`${API_URL}/users/register`, userData);
};

export const loginUser = async (userData) => {
  return await axios.post(`${API_URL}/users/login`, userData);
};

export const getAllQuizzes = async () => {
  return await axios.get(`${API_URL}/quizzes`);
};

export const getQuizById = async (id) => {
  return await axios.get(`${API_URL}/quizzes/${id}`);
};

export const createQuiz = async (quizData) => {
  return await axios.post(`${API_URL}/quizzes`, quizData);
};

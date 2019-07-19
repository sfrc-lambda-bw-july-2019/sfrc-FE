import axios from 'axios';

export const authenticator = () => {
  const token = localStorage.getItem('token');

  return axios.create({
    headers: {
      authorization: token
    },
    baseURL: 'https://secret-family-recipe-backend.herokuapp.com/api'
  });
};
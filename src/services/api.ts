import Axios from 'axios';

const urls = {
  test: `https://603471a2843b150017932a11.mockapi.io/api`,
  development: 'https://603471a2843b150017932a11.mockapi.io/api',
  production: 'https://603471a2843b150017932a11.mockapi.io/api',
};

const api = Axios.create({
  baseURL: urls[process.env.NODE_ENV],
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
  },
});

export default api;

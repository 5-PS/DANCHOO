import axios from 'axios';

const apiClient = axios.create({
  baseURL: process.env.NEXT_PUBLIC_BASE_API_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

export default apiClient;

// export const postRequest = axios.create({
//   baseURL: process.env.NEXT_PUBLIC_BASE_API_URL,
//   headers: {
//     'Content-Type': 'application/json',
//     Authorization: `Bearer ${document?.cookie.split('=')[1]}`,
//   },
// });

// Aqui irão as configurações do Axios
import axios from 'axios';

const api = axios.create({
  baseURL: 'https://dev-api.kuppi.com.br',
});

api.interceptors.request.use((config) => {
  const headers = {
    ...config.headers,
  };

  const authToken = process.env.REACT_APP_AUTH_TOKEN;
  if (authToken) {
    headers['auth-token'] = authToken;
  }

  return { ...config, headers };
});

export default api;

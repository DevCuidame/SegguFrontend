let API_BASE_URL;

if (process.env.NODE_ENV === 'production') {
  API_BASE_URL = 'https://mi-api-produccion.com/api';
} else {
  API_BASE_URL = 'http://localhost:4000/seggu';
}

export default API_BASE_URL;

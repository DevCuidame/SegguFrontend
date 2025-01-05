let API_BASE_URL;

if (process.env.NODE_ENV === 'production') {
  API_BASE_URL = 'seggubackend-production.up.railway.app/seggu';
} else {
  API_BASE_URL = 'https://seggubackend-production.up.railway.app/seggu';
}

export default API_BASE_URL;

let API_BASE_URL;

if (process.env.NODE_ENV === 'production') {
  API_BASE_URL = 'https://seggu-back.up.railway.app/seggu';
} else {
  API_BASE_URL = 'https://seggu-back.up.railway.app/seggu';
}

export default API_BASE_URL;

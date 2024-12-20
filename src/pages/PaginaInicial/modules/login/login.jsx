import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { login, logout } from '../../../../services/AuthUser.service'; 
import './Login.scss';

const Login = () => {
  const navigate = useNavigate();
  const [userInput, setUserInput] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);

  const handleSubmit = async (event) => {
    event.preventDefault();
    setError(null);

    try {
      await login(userInput, password); 
      navigate('/home');
    } catch (err) {
      setError(err.message);
    }
  };

  const focusSpan = (spanClass) => {
    const span = document.querySelector(`.${spanClass}`);
    if (span) {
      span.style.top = '-32px';
      span.style.fontSize = '1.25rem';
    }
  };

  const blurSpan = (spanClass, inputClass) => {
    const span = document.querySelector(`.${spanClass}`);
    const input = document.querySelector(`.${inputClass}`);
    if (span && input && input.value.trim() === '') {
      span.style.top = '0';
      span.style.fontSize = '1.5rem';
    }
  };

  return (
    <div className="login">
      <div className="container">
        <form onSubmit={handleSubmit}>
          <h2 className="title">ASEGURADO</h2>

          <div className="input email">
            <span className="span-email">Usuario</span>
            <input
              type="text"
              name="userInput"
              className="input input-email"
              onChange={(e) => setUserInput(e.target.value)}
              onFocus={() => focusSpan('span-email')}
              onBlur={() => blurSpan('span-email', 'input-email')}
            />

            <picture className="icon">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="30"
                height="30"
                fill="currentColor"
                className="bi bi-person-fill"
                viewBox="0 0 16 16"
              >
                <path d="M3 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6" />
              </svg>
            </picture>
          </div>

          <div className="input password">
            <span className="span-password">Contraseña</span>
            <input
              type="password"
              name="password"
              className="input input-password"
              onChange={(e) => setPassword(e.target.value)}
              onFocus={() => focusSpan('span-password')}
              onBlur={() => blurSpan('span-password', 'input-password')}
            />

            <picture className="icon">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="35"
                height="35"
                fill="currentColor"
                className="bi bi-key"
                viewBox="0 0 16 16"
              >
                <path d="M0 8a4 4 0 0 1 7.465-2H14a.5.5 0 0 1 .354.146l1.5 1.5a.5.5 0 0 1 0 .708l-1.5 1.5a.5.5 0 0 1-.708 0L13 9.207l-.646.647a.5.5 0 0 1-.708 0L11 9.207l-.646.647a.5.5 0 0 1-.708 0L9 9.207l-.646.647A.5.5 0 0 1 8 10h-.535A4 4 0 0 1 0 8m4-3a3 3 0 1 0 2.712 4.285A.5.5 0 0 1 7.163 9h.63l.853-.854a.5.5 0 0 1 .708 0l.646.647.646-.647a.5.5 0 0 1 .708 0l.646.647.646-.647a.5.5 0 0 1 .708 0l.646.647.793-.793-1-1h-6.63a.5.5 0 0 1-.451-.285A3 3 0 0 0 4 5" />
                <path d="M4 8a1 1 0 1 1-2 0 1 1 0 0 1 2 0" />
              </svg>
            </picture>
          </div>

          {error && <p className="error-message">{error}</p>}

          <div className="buttons">
            <button type="button" className="btn btn-registro">
              Registro
            </button>
            <button type="submit" className="btn btn-ingresar">
              Ingresar
            </button>
          </div>
        </form>

        <section className="img-section">
          <div className="bar bar1" />
          <div className="bar bar2" />
          <img src="/assets/login-img-1.jpg" alt="Login-bg" className="img-bg" />
        </section>
      </div>
    </div>
  );
};

export default Login;

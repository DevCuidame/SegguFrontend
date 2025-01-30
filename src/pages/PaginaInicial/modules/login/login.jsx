import React, { useState, useEffect } from 'react';
import LoginForm from './LoginForm/LoginForm';
import RegisterForm from './RegisterForm/RegisterForm';
import './Login.scss';

const Login = () => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    // Escucha el evento de cambio de tamaño
    window.addEventListener('resize', handleResize);

    // Limpia el evento al desmontar el componente
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const doRegister = () => {
    const imgSection = document.querySelector('.img-section');
    const loginForm = document.querySelector('.loginForm');
    const registerForm = document.querySelector('.register-form');
    const bar1 = document.querySelector('.bar1');
    const bar2 = document.querySelector('.bar2');

    // Si el tamaño de la pantalla es mayor a 1020px
    if (windowWidth > 1020) {
      if (imgSection && bar1 && bar2 && loginForm && registerForm) {
        imgSection.style.transform = 'translateX(-100%)';
        bar1.style.right = '83%';
        bar2.style.right = '77%';
        loginForm.style.filter = 'opacity(0)';
        registerForm.style.filter = 'opacity(1)';
      }
    } else {
      // Si el tamaño de la pantalla es menor a 1020px
      if (loginForm && registerForm) {
        loginForm.style.transform = 'rotateY(-90deg)';
        registerForm.style.transform = 'rotateY(0deg)';
        loginForm.style.filter = 'opacity(0)';
        registerForm.style.filter = 'opacity(1)';
      }
    }
  };

  const closeRegister = () => {
    const imgSection = document.querySelector('.img-section');
    const loginForm = document.querySelector('.loginForm');
    const registerForm = document.querySelector('.register-form');
    const bar1 = document.querySelector('.bar1');
    const bar2 = document.querySelector('.bar2');

    // Si el tamaño de la pantalla es mayor a 1020px
    if (windowWidth > 1020) {
      if (imgSection && bar1 && bar2 && loginForm) {
        imgSection.style.transform = 'translateX(0)';
        bar1.style.right = '17%';
        bar2.style.right = '23%';
        loginForm.style.filter = 'opacity(1)';
        registerForm.style.filter = 'opacity(0)';
      }
    } else {
      // Si el tamaño de la pantalla es menor a 1020px
      if (loginForm && registerForm) {
        loginForm.style.transform = 'rotateY(0deg)';
        registerForm.style.transform = 'rotateY(90deg)';
        loginForm.style.filter = 'opacity(1)';
        registerForm.style.filter = 'opacity(0)';
      }
    }
  };

  return (
    <div className="login">
      <div className="container">
        <LoginForm onRegister={doRegister} />

        <RegisterForm closeRegister={closeRegister} />

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

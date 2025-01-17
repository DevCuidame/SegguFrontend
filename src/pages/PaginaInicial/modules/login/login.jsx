import React from 'react';
import LoginForm from './LoginForm/LoginForm';
import RegisterForm from './RegisterForm/RegisterForm';
import './Login.scss';

const Login = () => {

  const doRegister = () => {
    const imgSection = document.querySelector('.img-section');
    const loginForm = document.querySelector('.loginForm');
    const bar1 = document.querySelector('.bar1');
    const bar2 = document.querySelector('.bar2');

    if (imgSection && bar1 && bar2 && loginForm) {
      imgSection.style.transform = 'translateX(-100%)';
      bar1.style.right = '83%';
      bar2.style.right = '77%';
      loginForm.style.filter = 'opacity(0)';
    }
  };

  const closeRegister = () => {
    const imgSection = document.querySelector('.img-section');
    const loginForm = document.querySelector('.loginForm');
    const bar1 = document.querySelector('.bar1');
    const bar2 = document.querySelector('.bar2');

    if (imgSection && bar1 && bar2 && loginForm) {
      imgSection.style.transform = 'translateX(0)';
      bar1.style.right = '17%';
      bar2.style.right = '23%';
      loginForm.style.filter = 'opacity(1)';
    }
  };

  return (
    <div className="login">
      <div className="container">
        <LoginForm onRegister={doRegister} />

        <RegisterForm closeRegister={closeRegister}></RegisterForm>

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

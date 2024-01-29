'use strict';
const loginForm = document.querySelector('.login-form');

function onLoginFormSubmit(event) {
  event.preventDefault();
  const email = event.target.elements.email.value.trim();
  const password = event.target.elements.password.value.trim();
  if (email === '' || password === '') {
    alert('All form fields must be filled in');
    return;
  }
  const userInfo = {
    email: `${email}`,
    password: `${password}`,
  };
  console.log(userInfo);
  loginForm.reset();
}
loginForm.addEventListener('submit', onLoginFormSubmit);

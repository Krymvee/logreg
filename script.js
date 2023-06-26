const kotak = document.querySelector('.kotak');
const loginLink = document.querySelector('.login-link');
const registerLink = document.querySelector('.register-link');

registerLink.addEventListener('click', () => {
    kotak.classList.add('active');
});

loginLink.addEventListener('click', () => {
    kotak.classList.remove('active');
});

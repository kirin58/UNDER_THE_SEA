const togglePassword = document.getElementById('toggle-password');
const passwordInput = document.getElementById('password');

togglePassword.addEventListener('click', () => {
    if (passwordInput.type === 'password') {
        passwordInput.type = 'text'; 
        togglePassword.classList.remove('bx-show-alt');
        togglePassword.classList.add('bx-hide');
    } else {
        passwordInput.type = 'password'; 
        togglePassword.classList.remove('bx-hide');
        togglePassword.classList.add('bx-show-alt');
    }
});



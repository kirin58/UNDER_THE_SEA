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

function signIn() {
    let inputUsernameOrEmail = document.getElementById("username").value.trim();
    let inputPassword = document.getElementById("password").value;

    document.getElementById("usernameError").innerText = "";
    document.getElementById("passwordError").innerText = "";

    let users = JSON.parse(localStorage.getItem("users")) || [];

    if (users.length === 0) {
        document.getElementById("usernameError").innerText = "Incorrect Username or Email. Please enter it again.";
        document.getElementById("passwordError").innerText = "Incorrect password. Please enter it again.";
        return;
    }

    let foundUser = users.find(user => 
        (user.username === inputUsernameOrEmail || user.email === inputUsernameOrEmail) && user.password === inputPassword
    );

    if (!foundUser) {
        document.getElementById("usernameError").innerText = "Incorrect Username or Email. Please enter it again.";
        document.getElementById("passwordError").innerText = "Incorrect password. Please enter it again.";
        return;
    }

    window.location.href = "../ScheduleManicurist/Schedule.html"; 
}




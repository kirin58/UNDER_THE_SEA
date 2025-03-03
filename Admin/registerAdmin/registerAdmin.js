function registerUser() {
    console.log("registerUser function called");

    let username = document.getElementById("Username").value.trim();
    let email = document.getElementById("Email").value.trim();
    let password = document.getElementById("Password").value;
    let confirmPassword = document.getElementById("ConfirmPassword").value;

    document.getElementById("usernameError").innerText = "";
    document.getElementById("emailError").innerText = "";
    document.getElementById("confirmPasswordError").innerText = "";
    document.getElementById("passwordError").innerText = "";

    let isValid = true;

    if (!username) {
        document.getElementById("usernameError").innerText = "This field is required.";
        isValid = false;
    }
    if (!confirmPassword) {
        document.getElementById("confirmPasswordError").innerText = "This field is required.";
        isValid = false;
    }
    if (!email) {
        document.getElementById("emailError").innerText = "This field is required.";
        isValid = false;
    }
    if (!password) {
        document.getElementById("passwordError").innerText = "This field is required.";
        isValid = false;
    }

    const passwordCriteria = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&#])[A-Za-z\d@$!%*?&#]{8,}$/;

    if (password.length < 8) {
        document.getElementById("passwordError").innerText = "Password must be at least 8 characters long.";
        isValid = false;
    } else if (!password.match(passwordCriteria)) {
        document.getElementById("passwordError").innerText =
            "Your password must be at least 8 characters long.:\n" +
            "1 uppercase letter, 1 lowercase letter, 1 number, and 1 special character.";
        isValid = false;
    }

    if (password !== confirmPassword) {
        document.getElementById("confirmPasswordError").innerText = "Passwords do not match.";
        isValid = false;
    }

    let users = JSON.parse(localStorage.getItem("users")) || [];

    let existingUser = users.find(user => user.username === username);
    let existingEmail = users.find(user => user.email === email);

    if (existingUser) {
        document.getElementById("usernameError").innerText = "This username is already taken.";
        isValid = false;
    }
    if (existingEmail) {
        document.getElementById("emailError").innerText = "This email is already taken.";
        isValid = false;
    }

    if (!isValid) {
        return;
    }

    let userData = { username, email, password };
    users.push(userData);
    localStorage.setItem("users", JSON.stringify(users));
    let alertBox = document.createElement("div");
    alertBox.innerText = "Waiting for the system to verify for 1-2 days.";
    alertBox.style.position = "fixed";
    alertBox.style.top = "35%";
    alertBox.style.left = "50%";
    alertBox.style.transform = "translate(-50%, -50%)";
    alertBox.style.background = "#03CA27";
    alertBox.style.color = "white";
    alertBox.style.padding = "30px 35px";
    alertBox.style.borderRadius = "10px";
    alertBox.style.fontSize = "22px";
    document.body.appendChild(alertBox);

    setTimeout(() => {
        document.body.removeChild(alertBox); 
        window.location.href = "../loginadmin/loginadmin.html";
    }, 2500);
}
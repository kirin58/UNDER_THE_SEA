function registerUser() {
    console.log("registerUser function called");

    let username = document.getElementById("Username").value.trim();
    let email = document.getElementById("Email").value.trim();
    let phone = document.getElementById("Phone").value.trim();
    let password = document.getElementById("Password").value;
    let confirmPassword = document.getElementById("ConfirmPassword").value;
    let facebook = document.getElementById("Facebook").value.trim();
    let instagram = document.getElementById("Instagram").value.trim();
    let line = document.getElementById("Line").value.trim();

    document.getElementById("usernameError").innerText = "";
    document.getElementById("emailError").innerText = "";
    document.getElementById("phoneError").innerText = "";
    document.getElementById("passwordError").innerText = "";
    document.getElementById("confirmPasswordError").innerText = "";
    document.getElementById("facebookError").innerText = "";
    document.getElementById("instagramError").innerText = "";
    document.getElementById("lineError").innerText = "";

    let isValid = true;

    if (!username) {
        document.getElementById("usernameError").innerText = "This field is required.";
        isValid = false;
    }
    if (!phone) {
        document.getElementById("phoneError").innerText = "This field is required.";
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
    if (!confirmPassword) {
        document.getElementById("confirmPasswordError").innerText = "This field is required.";
        isValid = false;
    }
    if (!facebook) {
        document.getElementById("facebookError").innerText = "This field is required.";
        isValid = false;
    }
    if (!instagram) {
        document.getElementById("instagramError").innerText = "This field is required.";
        isValid = false;
    }
    if (!line) {
        document.getElementById("lineError").innerText = "This field is required.";
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
    let existingPhone = users.find(user => user.phone === phone);

    if (existingUser) {
        document.getElementById("usernameError").innerText = "This username is already taken.";
        isValid = false;
    }
    if (existingEmail) {
        document.getElementById("emailError").innerText = "This email is already taken.";
        isValid = false;
    }
    if (existingPhone) {
        document.getElementById("phoneError").innerText = "This phone number is already taken.";
        isValid = false;
    }

    if (!isValid) {
        return;
    }

    let userData = { username, email, phone, password, facebook, instagram, line };
    users.push(userData);
    localStorage.setItem("users", JSON.stringify(users));
    window.location.href = "../sign_in/sign_in.html";
}


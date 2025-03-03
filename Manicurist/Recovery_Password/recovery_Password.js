document.addEventListener("DOMContentLoaded", function () {
    const emailInput = document.querySelector("input[type='email']");
    const confirmButton = document.querySelector(".confirm-btn");
    const errorMessage = document.querySelector(".error-message"); 

    confirmButton.addEventListener("click", function (event) {
        event.preventDefault();
        const email = emailInput.value.trim().toLowerCase();
        const users = JSON.parse(localStorage.getItem("users")) || [];
        console.log("Users from localStorage:", users);
        console.log("Email Input:", email);
        const userExists = users.some(user => user.email && user.email.toLowerCase() === email);

        if (userExists) {
            sessionStorage.setItem("recoveryEmail", email);
            window.location.href = "Verification_code1.html";
        } else {
            errorMessage.innerText = "Incorrect email."; 
        }
    });
});

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

  let matchedUser = users.find(user => 
    (user.username === inputUsernameOrEmail || user.email === inputUsernameOrEmail) && user.password === inputPassword
  );

  if (!matchedUser) {
    document.getElementById("usernameError").innerText = "Incorrect Username or Email. Please try again.";
    document.getElementById("passwordError").innerText = "Incorrect Password. Please try again.";
    return;
  }

  // ถ้าผู้ใช้ตรงกัน ล็อกอินสำเร็จ
  console.log("Login successful! Redirecting to home...");
  localStorage.setItem("loggedInUser", JSON.stringify(matchedUser)); 
  window.location.href = "../Home/home.html"; 
}

function handleCredentialResponse(response) {
  const responsePayload = parseJwt(response.credential);
  console.log("ID: " + responsePayload.sub);
  console.log('Name: ' + responsePayload.name);
  console.log('Image URL: ' + responsePayload.picture);
  console.log('Email: ' + responsePayload.email);
}

function parseJwt(token) {
  const base64Url = token.split('.')[1];
  const base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
  const jsonPayload = decodeURIComponent(atob(base64).split('').map(function(c) {
    return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2);
  }).join(''));
  return JSON.parse(jsonPayload);
}

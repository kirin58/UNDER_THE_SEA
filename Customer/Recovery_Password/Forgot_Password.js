document.addEventListener("DOMContentLoaded", () => {
  const newPasswordInput = document.getElementById("Password");
  const confirmPasswordInput = document.getElementById("ConfirmPassword");
  const newPasswordError = document.getElementById("newPasswordError");
  const confirmPasswordError = document.getElementById("confirmPasswordError");

  function validatePassword(password) {
      const minLength = /.{8,}/;
      const uppercase = /[A-Z]/;
      const lowercase = /[a-z]/;
      const number = /[0-9]/;
      const specialChar = /[\W_]/;

      return minLength.test(password) &&
             uppercase.test(password) &&
             lowercase.test(password) &&
             number.test(password) &&
             specialChar.test(password);
  }

  // ฟังก์ชันเปิด-ปิดรหัสผ่านสำหรับ New Password
  const toggleNewPass = document.getElementById('toggle-password1');
  toggleNewPass.addEventListener('click', () => {
    if (newPasswordInput.type === 'password') {
      newPasswordInput.type = 'text';
      toggleNewPass.classList.replace('bx-show-alt', 'bx-hide');
    } else {
      newPasswordInput.type = 'password';
      toggleNewPass.classList.replace('bx-hide', 'bx-show-alt');
    }
  });

  const toggleConfirmPass = document.getElementById('toggle-password2');
  toggleConfirmPass.addEventListener('click', () => {
    if (confirmPasswordInput.type === 'password') {
      confirmPasswordInput.type = 'text';
      toggleConfirmPass.classList.replace('bx-show-alt', 'bx-hide');
    } else {
      confirmPasswordInput.type = 'password';
      toggleConfirmPass.classList.replace('bx-hide', 'bx-show-alt');
    }
  });

  document.getElementById("passwordForm").addEventListener("submit", function(event) {
      event.preventDefault();

      const newPassword = newPasswordInput.value.trim();
      const confirmPassword = confirmPasswordInput.value.trim();

      newPasswordError.textContent = "";
      confirmPasswordError.textContent = "";

      if (!validatePassword(newPassword)) {
          newPasswordError.innerHTML = "Your password must:<br>• Be at least 8 characters long<br>• Contain 1 uppercase letter<br>• Contain 1 lowercase letter<br>• Contain 1 number<br>• Contain 1 special character";
          return;
      }

      if (newPassword !== confirmPassword) {
          confirmPasswordError.textContent = "Passwords do not match.";
          return;
      }

      // อัพเดตข้อมูลรหัสผ่านใน localStorage
      let users = JSON.parse(localStorage.getItem("users")) || [];
      let loggedInUser = JSON.parse(localStorage.getItem("loggedInUser"));
      if (loggedInUser) {
          const user = users.find(u => u.email === loggedInUser.email);
          if (user) {
              user.password = newPassword; // อัพเดตพาสเวิร์ดของผู้ใช้
              localStorage.setItem("users", JSON.stringify(users)); // บันทึกการอัพเดต
          }
      }

      alert("Password changed successfully! Redirecting to Sign In page.");
      window.location.href = "../sign_in/sign_in.html"; // เปลี่ยนหน้าไปยัง Sign In
  });
});

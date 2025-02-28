function toggleMenu() {
    var menu = document.getElementById("dropdownMenu");
    menu.style.display = menu.style.display === "block" ? "none" : "block";
  }

  function logout() {
    alert("Logging out...");
  }


  let users = [];
  let actionLog = [];


  function logAction(action) {
    let timestamp = new Date().toLocaleString();
    actionLog.push({ action, timestamp });
    console.log("Action logged:", action, "at", timestamp);
  }


  function confirmRegistration() {
    let username = document.getElementById("username").value.trim();
    let password = document.getElementById("Password").value;
    let isValid = true;


    document.getElementById("usernameError").innerText = "";
    document.getElementById("passwordError").innerText = "";


    if (username.length > 50) {
      document.getElementById("usernameError").innerText = "Username must be no more than 50 characters long.";
      isValid = false;
    }

 
    if (password.length < 8) {
      document.getElementById("passwordError").innerText = "Password must be at least 8 characters long.";
      isValid = false;
    }else if (!password.match(passwordCriteria)) {
        document.getElementById("passwordError").innerText =
            "Your password must be at least 8 characters long.:\n" +
            "1 uppercase letter, 1 lowercase letter, 1 number, and 1 special character.";
        isValid = false;
    }
    


    if (!isValid) {
      logAction("การยืนยันล้มเหลว: พบ error ในการกรอกข้อมูล");
      return;
    }


    let existingUser = users.find(user => user.username === username);
    if (existingUser) {
        document.getElementById("usernameError").innerText = "Username already exists!";
        logAction("การยืนยันล้มเหลว: ชื่อผู้ใช้ซ้ำ");
        return;
    }

    // บันทึกข้อมูลผู้ใช้
    let userData = { username, password };
    users.push(userData);
    localStorage.setItem("users", JSON.stringify(users));
    logAction("การยืนยันสำเร็จ: บันทึกข้อมูลผู้ใช้ " + username);

    alert("ลงทะเบียนสำเร็จ! กรุณาเข้าสู่ระบบ");
    window.location.href = "login.html"; // ไปหน้าล็อกอิน
}

function login() {
  let username = document.getElementById("loginUsername").value.trim();
  let password = document.getElementById("loginPassword").value;

  let foundUser = users.find(user => user.username === username && user.password === password);

  if (foundUser) {
      localStorage.setItem("loggedInUser", JSON.stringify(foundUser));
      logAction("เข้าสู่ระบบสำเร็จ: " + username);
      alert("เข้าสู่ระบบสำเร็จ!");
      window.location.href = "home.html"; // ไปยังหน้าหลัก
  } else {
      logAction("เข้าสู่ระบบล้มเหลว: ข้อมูลไม่ถูกต้อง");
      alert("ชื่อผู้ใช้หรือรหัสผ่านไม่ถูกต้อง!");
  }
}

function addManicurist() {
    const newManicuristColumn = document.createElement("div");
    newManicuristColumn.classList.add("manicuristcolumn");
  
    const usernameLabel = document.createElement("label");
    usernameLabel.classList.add("input");
    
    usernameLabel.innerHTML = `<p>Username</p><input type="text" required /><div id="usernameError" class="error"></div>`;
  
    const passwordLabel = document.createElement("label");
    passwordLabel.classList.add("input");
    passwordLabel.innerHTML = `<p>Password</p><input type="password" required /><div id="passwordError" class="error"></div>`;
  
    newManicuristColumn.appendChild(usernameLabel);
    newManicuristColumn.appendChild(passwordLabel);
  
    const mainSection = document.querySelector("main section");
    const buttonsDiv = mainSection.querySelector(".buttons");
  
    if (buttonsDiv) {
      mainSection.insertBefore(newManicuristColumn, buttonsDiv);
    }
  }


  document.addEventListener("DOMContentLoaded", function () {
    document.querySelectorAll(".delete").forEach(button => {
      button.addEventListener("click", function () {
        let section = this.closest("section");
        let labels = section.querySelectorAll(".manicuristcolumn");

        labels.forEach(label => {
          if (!label.querySelector(".delete-btn")) {
            let deleteBtn = document.createElement("button");
            deleteBtn.classList.add("delete-btn");
            deleteBtn.textContent = "Delete";
            deleteBtn.style.backgroundColor = "#EC4548";

            
            deleteBtn.addEventListener("click", function () {
              showDeleteConfirmation(label);
            });

            label.appendChild(deleteBtn);
          }
        });
      });
    });
  });

 
  function showDeleteConfirmation(target) {
    
    let overlay = document.createElement("div");
    overlay.classList.add("overlay");

    
    let modal = document.createElement("div");
    modal.classList.add("modal");
    modal.innerHTML = `
      <p>Confirm delete of username?</p>
      <div class="modal-buttons">
        <button class="confirm-btn">Confirm</button>
        <button class="cancel-btn">Cancel</button>
        
      </div>
    `;

    overlay.appendChild(modal);
    document.body.appendChild(overlay);

    
    modal.querySelector(".confirm-btn").addEventListener("click", function () {
      target.remove();
      document.body.removeChild(overlay);
      logAction("ลบข้อมูลผู้ใช้เรียบร้อย");
    });

    
    modal.querySelector(".cancel-btn").addEventListener("click", function () {
      document.body.removeChild(overlay);
      logAction("ยกเลิกการลบข้อมูล");
    });
  }

function addManicurist() {
    const newManicuristColumn = document.createElement('div');
    newManicuristColumn.classList.add('manicuristcolumn');

    const usernameLabel = document.createElement('label');
    usernameLabel.classList.add('input');
    usernameLabel.innerHTML = `<p>Username</p><input type="text" required />`;

    const passwordLabel = document.createElement('label');
    passwordLabel.classList.add('input');
    passwordLabel.innerHTML = `<p>Password</p><input type="password" required />`;

    newManicuristColumn.appendChild(usernameLabel);
    newManicuristColumn.appendChild(passwordLabel);

    const mainSection = document.querySelector('main section');
    const buttonsDiv = mainSection.querySelector('.buttons');

    if (buttonsDiv) {
        mainSection.insertBefore(newManicuristColumn, buttonsDiv);
    }
}


document.addEventListener("DOMContentLoaded", function () {
  document.querySelectorAll(".delete").forEach(button => {
      button.addEventListener("click", function () {
          let section = this.closest("section");
          let labels = section.querySelectorAll(".manicuristcolumn");

          labels.forEach(label => {
              let username = label.querySelector("input[type='text']").value.trim();
              if (!label.querySelector(".delete-btn")) {
                  let deleteBtn = document.createElement("button");
                  deleteBtn.classList.add("delete-btn");
                  deleteBtn.textContent = "Delete";
                  deleteBtn.style.backgroundColor = "#EC4548";

                  deleteBtn.addEventListener("click", function () {
                      showDeleteConfirmation(label, username);
                  });

                  label.appendChild(deleteBtn);
              }
          });
      });
  });

  // โหลดข้อมูลผู้ใช้ที่ล็อกอินล่าสุด
  let loggedInUser = JSON.parse(localStorage.getItem("loggedInUser"));
  if (loggedInUser) {
      console.log("Welcome back, " + loggedInUser.username);
  }
});

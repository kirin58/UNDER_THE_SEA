let userType = "";  // ตัวแปรที่เก็บประเภทของผู้ใช้

document.getElementById("dropdownBtn").addEventListener("click", function () {
    document.getElementById("dropdownMenu").classList.toggle("hidden");
});

function selectUser(user) {
    userType = user;  // เก็บประเภทของผู้ใช้ที่เลือก
    document.getElementById("dropdownBtn").textContent = user + " ▼";
    document.getElementById("dropdownMenu").classList.add("hidden");
    document.getElementById("confirmBtn").classList.remove("hidden");
}

function navigateToLogin() {
    let loginUrl = "";
    
    // กำหนด URL ตามประเภทของผู้ใช้ที่เลือก
    if (userType === "Customer") {
        loginUrl = "/Customer/sign_in/sign_in.html";  // เปลี่ยนเส้นทางไปหน้าล็อกอินของ Customer
    } else if (userType === "Manicurist") {
        loginUrl = "../Manicurist/LoginManicurist/loginManicurist.html";  // เปลี่ยนเส้นทางไปหน้าล็อกอินของ Manicurist
    } else if (userType === "Admin") {
        loginUrl = "/Admin/loginadmin/loginadmin.html";  // เปลี่ยนเส้นทางไปหน้าล็อกอินของ Admin
    }
    
    // เปลี่ยนเส้นทางไปยัง URL ที่กำหนด
    if (loginUrl) {
        window.location.href = loginUrl;
    }
}

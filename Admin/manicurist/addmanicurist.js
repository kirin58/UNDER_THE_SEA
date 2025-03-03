function toggleMenu() {
  var menu = document.getElementById("dropdownMenu");
  menu.style.display = (menu.style.display === "block") ? "none" : "block";
}

function logout() {
  alert("Logging out...");

}


document.addEventListener("DOMContentLoaded", function () {
  // ทำให้ปุ่ม Confirm หายไปเมื่อคลิก
  document.querySelectorAll(".Comfirm").forEach(button => {
      button.addEventListener("click", function () {
          this.style.display = "none"; // ซ่อนปุ่ม Confirm
      });
  });

  // ทำให้ปุ่ม Delete ลบทั้งแถวนั้นออก
  document.querySelectorAll(".delete").forEach(button => {
      button.addEventListener("click", function () {
          let row = this.closest(".manicuristcolumn");
          if (row) {
              row.remove(); // ลบแถวที่เกี่ยวข้อง
          }
      });
  });
});

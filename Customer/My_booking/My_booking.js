document.addEventListener("DOMContentLoaded", function () {
    document.querySelectorAll(".cancel-btn").forEach(button => {
        button.addEventListener("click", function () {
            this.closest(".item").remove();
        });
    });
});
function toggleMenu() {
    var menu = document.getElementById("dropdownMenu");
    menu.style.display = (menu.style.display === "block") ? "none" : "block";
}

function logout() {
    alert("Logging out...");

}
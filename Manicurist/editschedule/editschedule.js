function toggleMenu() {
    var menu = document.getElementById("dropdownMenu");
    menu.style.display = (menu.style.display === "block") ? "none" : "block";
}

function logout() {
    alert("Logging out...");

}
document.querySelectorAll(".close-btn").forEach(button => {
    button.addEventListener("click", function () {
        let section = this.closest("section");
        let availableLink = section.querySelector(".AVAILABLE, .CLOSED");

        if (this.classList.contains("close-btn")) {

            if (availableLink) {
                availableLink.textContent = "CLOSE";
                availableLink.classList.remove("AVAILABLE");
                availableLink.classList.add("CLOSED");
            }

            this.textContent = "OPEN";
            this.classList.remove("close-btn");
            this.classList.add("open-btn");
        } else if (this.classList.contains("open-btn")) {
            if (availableLink) {
                availableLink.textContent = "AVAILABLE";
                availableLink.classList.remove("CLOSED");
                availableLink.classList.add("AVAILABLE");
            }

            this.textContent = "CLOSE";
            this.classList.remove("open-btn");
            this.classList.add("close-btn");
        }
    });
});

document.querySelectorAll(".finish-btn").forEach(button => {
    button.addEventListener("click", function () {
        this.style.display = "none"; 
    });
});

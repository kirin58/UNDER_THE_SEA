function toggleMenu() {
    var menu = document.getElementById("dropdownMenu");
    menu.style.display = (menu.style.display === "block") ? "none" : "block";
}

function logout() {
    alert("Logging out...");

}


document.addEventListener("DOMContentLoaded", function () {
    const fileInput = document.getElementById("fileInput");
    const previewImage = document.getElementById("previewImage");
    const uploadText = document.getElementById("uploadText");
    const errorMessage = document.getElementById("error-message");
    const confirmBtn = document.getElementById("confirmBtn");

    fileInput.addEventListener("change", function () {
        const file = this.files[0]; 
        if (file) {
            
            if (file.size > 5 * 1024 * 1024) {
                errorMessage.textContent = "The file size must not exceed 5 MB!";
                errorMessage.style.display = "block";
                fileInput.value = ""; 
                previewImage.style.display = "none";
                return;
            } else {
                errorMessage.style.display = "none"; 
            }

            
            const reader = new FileReader();
            reader.onload = function (e) {
                previewImage.src = e.target.result;
                previewImage.style.display = "block";
                uploadText.style.display = "none";
            };
            reader.readAsDataURL(file);
        }
    });

    confirmBtn.addEventListener("click", function (event) {
        if (!fileInput.files.length) {
            errorMessage.textContent = "Please upload the transfer slip!";
            errorMessage.style.display = "block";
            event.preventDefault(); 
        }
    });
});

document.getElementById("confirmBtn").addEventListener("click", function() {
    const fileInput = document.getElementById("fileInput");
    const errorMessage = document.getElementById("error-message");

    if (!fileInput.files.length) {
        errorMessage.style.display = "block"; 
    } else {
        errorMessage.style.display = "none"; 
        alert("Confirm payment is complete!");
    }
});


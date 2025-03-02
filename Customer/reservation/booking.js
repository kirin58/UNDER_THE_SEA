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

    const dateInput = document.getElementById("Date");
    const timeInput = document.getElementById("Time");

    fileInput.addEventListener("change", function (event) {
        const file = event.target.files[0];

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
        let errorText = "";

        if (!dateInput.value) {
            errorText += "Please select a date!<br>";
        }

        if (!timeInput.value) {
            errorText += "Please select a time!<br>";
        }

        if (!fileInput.files.length) {
            errorText += "Please insert a picture of nail designs!<br>";
        }

        if (errorText) {
            event.preventDefault();
            errorMessage.innerHTML = errorText;
            errorMessage.style.display = "block";
        } else {
            errorMessage.style.display = "none";
        }
    });
});
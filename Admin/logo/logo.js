function toggleMenu() {
    var menu = document.getElementById("dropdownMenu");
    menu.style.display = (menu.style.display === "block") ? "none" : "block";
}

function logout() {
    alert("Logging out...");

}


document.querySelectorAll("label.logo input[type='file']").forEach(input => {
    input.addEventListener("change", function (event) {
      const file = event.target.files[0];
      const maxSize = 5 * 1024 * 1024; 

     
      const previewImage = input.nextElementSibling;      
      const uploadText = previewImage.nextElementSibling; 
      let errorText = null;
      
      
      if (
        uploadText.nextElementSibling &&
        uploadText.nextElementSibling.classList.contains("errorText")
      ) {
        errorText = uploadText.nextElementSibling;
      }

      if (file) {
        if (file.size > maxSize) {
          
          if (errorText) {
            errorText.textContent = "The file size must not exceed 5 MB!";
            errorText.style.display = "block";
          } else {
            alert("The file size must not exceed 5 MB!");
          }
          event.target.value = "";  
          previewImage.style.display = "none";
          uploadText.style.display = "block";
        } else {
          
          if (errorText) {
            errorText.style.display = "none";
          }
          
          const reader = new FileReader();
          reader.onload = function(e) {
            previewImage.src = e.target.result;
            previewImage.style.display = "block";
            uploadText.style.display = "none";
          };
          reader.readAsDataURL(file);
        }
      }
    });
  });
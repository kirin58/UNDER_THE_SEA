function toggleMenu() {
    var menu = document.getElementById("dropdownMenu");
    menu.style.display = (menu.style.display === "block") ? "none" : "block";
}

function logout() {
    alert("Logging out...");

}


document.addEventListener("DOMContentLoaded", function () {
    const confirmButton = document.querySelector(".confirm-button");
    const inputs = document.querySelectorAll("input");

    confirmButton.addEventListener("click", function () {
        let contactData = {};

        inputs.forEach(input => {
            contactData[input.id] = input.value;
            input.setAttribute("readonly", true); 
        });

        localStorage.setItem("contactInfo", JSON.stringify(contactData));

        console.log("บันทึกข้อมูล:", contactData);
    });
});

// document.addEventListener("DOMContentLoaded", function () {           
//     const inputs = document.querySelectorAll("input");
//     const savedData = localStorage.getItem("contactInfo");

//     if (savedData) {
//         const contactData = JSON.parse(savedData);
//         inputs.forEach(input => {
//             if (contactData[input.id]) {
//                 input.value = contactData[input.id];
//                 input.setAttribute("readonly", true);
//             }
//         });
//     }
// });


// fetch("https://your-api.com/save-contact", {
//     method: "POST",
//     headers: {
//         "Content-Type": "application/json",
//     },
//     body: JSON.stringify(contactData),
// })
// .then(response => response.json())
// .then(data => console.log("บันทึกสำเร็จ:", data))
// .catch(error => console.error("เกิดข้อผิดพลาด:", error));
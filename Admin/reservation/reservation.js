function toggleMenu() {
    var menu = document.getElementById("dropdownMenu");
    menu.style.display = (menu.style.display === "block") ? "none" : "block";
}

function logout() {
    alert("Logging out...");

}
// errorข้อความ
document.querySelectorAll(".confirm-btn").forEach(button => {
    button.addEventListener("click", function(event) {
        event.preventDefault();
        
        let isValid = true;
        let inputs = this.closest("section").querySelectorAll(".input-text");
        
        inputs.forEach(input => {
            if (input.value.length > 50) {
                isValid = false;
            }
        });

        if (!isValid) {
            alert("Please enter no more than 50 characters.");
        } 
    });
});
document.addEventListener("DOMContentLoaded", function () {
    function updateLabelNumbers(columnManage, labelType = "Type") {
        let allLabels = columnManage.querySelectorAll("label");
        allLabels.forEach((label, index) => {
            label.querySelector("p").textContent = `${labelType} ${index + 1}`;
        });
    }

    function addDefaultLabel(columnManage, labelType = "Type") {
        if (columnManage.children.length === 0) {
            let newLabel = document.createElement("label");
            newLabel.classList.add("input");
            newLabel.innerHTML = `
                <p>${labelType} 1</p>
                <input type="text" class="input-text">
            `;
            columnManage.appendChild(newLabel);
        }
    }

    document.querySelectorAll(".columnmange").forEach(column => {
        let labelText = column.closest("section").querySelector("h2").textContent.includes("manicurist") 
            ? "Manicurist" 
            : "Type";
        addDefaultLabel(column, labelText);
    });

    // ปุ่มเพิ่มช่อง
    document.querySelectorAll(".plus, .plusmanicurist").forEach(button => {
        button.addEventListener("click", function () {
            let section = this.closest("section");
            let columnManage = section.querySelector(".columnmange");

            let labelText = section.querySelector("h2").textContent.includes("manicurist") ? "Manicurist" : "Type";

            let newLabel = document.createElement("label");
            newLabel.classList.add("input");
            newLabel.innerHTML = `
                <p>${labelText}</p>
                <input type="text" class="input-text">
            `;

            columnManage.appendChild(newLabel);
            updateLabelNumbers(columnManage, labelText);
        });
    });

    // ลบช่อง
    document.querySelectorAll(".delete").forEach(button => {
        button.addEventListener("click", function() {
            let section = this.closest("section");
            let columnManage = section.querySelector(".columnmange");
            let labels = columnManage.querySelectorAll("label");

            labels.forEach(label => {
                if (!label.querySelector(".delete-btn")) {
                    let deleteBtn = document.createElement("button");
                    deleteBtn.classList.add("delete-btn");
                    deleteBtn.innerHTML = "<i class='bx bx-plus'></i>";
                    deleteBtn.onclick = function () {
                        this.parentElement.remove();
                        updateLabelNumbers(columnManage, section.querySelector("h2").textContent.includes("manicurist") ? "Manicurist" : "Type");

                        if (columnManage.children.length === 0) {
                            addDefaultLabel(columnManage, section.querySelector("h2").textContent.includes("manicurist") ? "Manicurist" : "Type");
                        }
                    };
                    label.appendChild(deleteBtn);
                }
            });
        });
    });

    document.addEventListener("click", function (event) {
        if (event.target.classList.contains("delete-btn")) {
            let section = event.target.closest("section");
            let columnManage = section.querySelector(".columnmange");

            event.target.parentElement.remove();
            updateLabelNumbers(columnManage, section.querySelector("h2").textContent.includes("manicurist") ? "Manicurist" : "Type");

            if (columnManage.children.length === 0) {
                addDefaultLabel(columnManage, section.querySelector("h2").textContent.includes("manicurist") ? "Manicurist" : "Type");
            }
        }
    });
});